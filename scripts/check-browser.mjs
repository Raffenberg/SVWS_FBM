import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import { mkdirSync, readFileSync } from 'node:fs'
import { clean, createSidebar, footerFor, sectionFor, sidebarFor, flatten } from '../.vitepress/navigation.mjs'
import { overviewRows } from '../.vitepress/overview.mjs'
const catalog=JSON.parse(readFileSync('tests/database-catalogs.json','utf8'))
const nav=JSON.parse(readFileSync('.vitepress/sidebar.json','utf8'))
const origin=process.env.PREVIEW_URL??'http://127.0.0.1:4173'
const base=process.env.BASE??'/Schulungsunterlagen/'
const urlFor=link=>origin+base+link.slice(1)
const local=href=>new URL(href,urlFor('/')).pathname.slice(base.length-1)
const browser=await chromium.launch()
const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'de-DE'})
const errors=[]
page.on('pageerror',error=>errors.push(error.message))
mkdirSync('test-results',{recursive:true})
const roots=()=>page.locator('#VPSidebarNav .VPSidebarItem.level-0')
const visit=async link=>{
 const response=await page.goto(urlFor(link),{waitUntil:'domcontentloaded'})
 const target=nav.aliases[clean(link)+'/']??nav.aliases[clean(link)]
 if(target?.includes('#')) await page.waitForURL(urlFor(target))
 await page.waitForLoadState('networkidle')
 assert.equal(response.status(),200,link)
 await page.waitForSelector('.VPContent')
}
const paths=[...new Set([...Object.values(nav.sections).flatMap(flatten).filter(x=>x.link&&!x.link.includes('#')).map(x=>x.link),...nav.nav.map(x=>x.link),...Object.keys(nav.aliases)])]
try {
 for(const path of paths) {
  const link=path.endsWith('/')?path:path+'.html'
  await visit(link)
  const section=sectionFor(nav,path),menu=sidebarFor(nav,path)
  assert.deepEqual(await roots().locator(':scope > .item .text').allTextContents(),menu.map(x=>x.text),path)
  assert.deepEqual(await roots().last().locator('a .text').allTextContents(),menu.at(-1).items.map(x=>x.text),path)
  assert.ok((await roots().last().getAttribute('class')).includes('collapsed'),path)
  if(section==='testdaten') assert.deepEqual(await roots().evaluateAll(nodes=>nodes.map(n=>n.classList.contains('collapsed'))),menu.map(x=>!!x.collapsed),path)
  else {
   assert.equal(await roots().first().locator(':scope > .item .text').innerText(),nav.sectionLabels[section],path)
   if(section==='team') assert.equal(await roots().first().locator(':scope > .item .caret').count(),0)
  }
  const active=await page.locator('.VPNavBarMenu a.active').allTextContents()
  if(section!=='team') assert.deepEqual(active.map(x=>x.trim()),[nav.sectionLabels[section]],path)
  const footer=footerFor(nav,path)
  for(const side of ['prev','next']) {
   const a=page.locator('.VPDocFooter a.'+side)
   assert.equal(await a.count(),footer[side]?1:0,path+': '+side)
   if(footer[side]) assert.equal(clean(local(await a.getAttribute('href'))),clean(footer[side].link),path)
  }
 }
 for(const path of ['/technik/','/Datenbanken/','/schulungsmodule/','/Fachberatung_Anleitungen/Test-_und_Schulungsserver/']) {
  await visit(path)
  const expected=overviewRows(nav,path),rows=page.locator('.navigation-overview tbody tr')
  assert.equal(await rows.count(),expected.length,path)
  for(const [i,item] of expected.entries()) {
   assert.equal(await rows.nth(i).locator('td').first().innerText(),item.text,path)
   assert.equal(await rows.nth(i).locator('td').nth(1).innerText(),item.description,path)
   const a=rows.nth(i).locator('a')
   assert.equal(await a.count(),item.link?1:0,path)
   if(item.link) assert.equal(clean(local(await a.getAttribute('href'))),clean(item.link),path)
  }
 }
 for(const [path,chapters] of [['/Datenbanken/testdaten/',catalog.schoolChapters],['/Datenbanken/schulungen/',catalog.moduleChapters]]) {
  await visit(path)
  assert.deepEqual(await page.locator('.vp-doc h2').evaluateAll(nodes=>nodes.map(node=>{const copy=node.cloneNode(true);copy.querySelectorAll('.header-anchor').forEach(a=>a.remove());return copy.textContent.trim()})),chapters.map(x=>x.text),path)
  assert.equal(await page.locator('.VPDocAsideOutline a.outline-link').count(),chapters.length,path)
  for(const chapter of chapters) assert.ok(await page.locator('.VPDocAsideOutline a[href="#'+chapter.id+'"]').count(),chapter.text)
  const last=chapters.at(-1)
  await page.locator('.VPDocAsideOutline a[href="#'+last.id+'"]').click()
  assert.equal(new URL(page.url()).hash,'#'+last.id)
 }
 await visit('/Datenbanken/testdaten/')
 const toggle=async i=>roots().nth(i).locator(':scope > .item .caret').click()
 await toggle(2); await toggle(3)
 assert.deepEqual(await roots().evaluateAll(nodes=>nodes.map(n=>n.classList.contains('collapsed'))),[false,false,false,false,true])
 await roots().nth(2).locator(':scope > .item .caret').focus(); await page.keyboard.press('Enter')
 assert.deepEqual(await roots().evaluateAll(nodes=>nodes.map(n=>n.classList.contains('collapsed'))),[false,false,true,false,true])
 await visit('/Datenbanken/schulungen/laufbahndaten.html')
 await page.goBack({waitUntil:'networkidle'})
 assert.ok(page.url().includes('/Datenbanken/testdaten/'))
 await visit('/schulungsmodule/uebergangsschulung/2_Filtern_Gruppenprozesse.html')
 const prose=await page.locator('.vp-doc').innerText()
 assert.ok(prose.includes('🅰')&&!prose.includes(':a:'))
 await visit('/')
 await page.getByRole('button',{name:'Dokumentation durchsuchen'}).click()
 const search=page.locator('input[type="search"]')
 await search.fill('Problemdatenbanken')
 await page.locator('.VPLocalSearchBox .result').first().waitFor()
 await search.press('Escape')
 await visit('/wissen/aktuelles')
 assert.equal(await page.locator('.latest-tips tbody tr').count(),6)
 const dates=await page.locator('.latest-tips tbody tr td:first-child').allTextContents()
 const stamps=dates.map(date=>{const [d,m,y]=date.split('.').map(Number);return Date.UTC(y,m-1,d)})
 assert.deepEqual(stamps,[...stamps].sort((a,b)=>b-a))
 const shots=['/','/beratung/','/moderation/','/technik/','/Datenbanken/schulungen/','/Datenbanken/testdaten/','/Datenbanken/problemdatenbanken','/umgebungen/einrichten','/umgebungen/dbeaver','/Fachberatung_Anleitungen/Test-_und_Schulungsserver/','/fortbildung/inhaltsstand','/wissen/aktuelles']
 for(const scheme of ['light','dark']) {
  await page.evaluate(mode=>{document.documentElement.classList.toggle('dark',mode==='dark');localStorage.setItem('vitepress-theme-appearance',mode)},scheme)
  for(const width of [390,820,1440]) {
   await page.setViewportSize({width,height:1000})
   for(const link of shots) {
    await visit(link)
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,width+': '+link)
    await page.screenshot({path:'test-results/portal-'+scheme+'-'+width+'-'+encodeURIComponent(link)+'.png',fullPage:true,animations:'disabled'})
   }
   if(width===390) {
    await visit('/umgebungen/einrichten')
    await page.locator('.VPLocalNav button.menu').click()
    assert.ok(await roots().nth(2).isVisible())
    assert.equal(await roots().nth(2).locator(':scope > .item .text').innerText(),'Testumgebung')
    await page.waitForFunction(()=>document.querySelector('.VPSidebar')?.getBoundingClientRect().left>=-1)
    await page.screenshot({path:'test-results/portal-'+scheme+'-mobile-sidebar.png',fullPage:false,animations:'disabled'})
    await page.locator('.VPBackdrop').click({ position: { x: 380, y: 300 } })
    await page.waitForFunction(()=>!document.querySelector('.VPSidebar')?.classList.contains('open'))
   }
  }
 }
 for(const width of [1024,1280,1440]) {
  await page.setViewportSize({width,height:1000}); await visit('/')
  if(width<1400) {
   await page.locator('.VPNavBarHamburger').click()
   assert.deepEqual((await page.locator('.VPNavScreenMenuLink').allTextContents()).map(x=>x.trim()),nav.nav.map(x=>x.text))
   await page.locator('.VPNavBarHamburger').click()
   await page.waitForSelector('.VPNavScreen',{state:'hidden'})
  } else assert.deepEqual((await page.locator('.VPNavBarMenu > a').allTextContents()).map(x=>x.trim()),nav.nav.map(x=>x.text))
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2),false,'Kopfmenü '+width)
  await page.screenshot({path:'test-results/portal-header-'+width+'.png',fullPage:true})
 }
 assert.deepEqual(errors,[],'Browserfehler')
 console.log(paths.length+' Artikel-/Übersichtsaufrufe: Bereich, Sidebar, Vorheriges/Nächstes; vier Übersichtstabellen und zwei Sammelartikel mit Kapitelverzeichnis, unabhängige Sektionen, Suche, Emoji und Verlauf geprüft. 72 Layoutansichten hell/dunkel sowie Kopfmenü 1024/1280/1440 geprüft.')
} finally { await browser.close() }
