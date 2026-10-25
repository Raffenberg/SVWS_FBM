import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { clean, sectionFor, topicFor, sequence, footerFor, createSidebar, sidebarFor, flatten } from '../.vitepress/navigation.mjs'
import { overviewRows } from '../.vitepress/overview.mjs'
const nav=JSON.parse(readFileSync('.vitepress/sidebar.json','utf8'))
const sidebar=createSidebar(nav)
const pages=Object.values(nav.sections).flatMap(flatten).filter(item=>item.link&&!item.link.includes('#'))
test('canonical URLs and prefix boundaries',()=>{
 assert.equal(clean('/a/index.md'),'/a')
 assert.equal(clean('/a%20b.html#x'),'/a b')
 assert.equal(sectionFor(nav,'/umgebungen/lokale-analyse.html'),'beratung')
 assert.equal(sectionFor(nav,'/umgebungen/einrichten.html'),'testdaten')
 assert.equal(sectionFor(nav,'/beratung-neu/'),undefined)
})
test('six requested areas in the requested order',()=>{
 assert.deepEqual(nav.nav.map(x=>x.text),['Neu im Team','Fachberatung','Moderation','Datenbanken & Installation','Fortbildung','Wissen & Links'])
 for(const entry of nav.nav) assert.ok(sectionFor(nav,entry.link))
})
test('every menu page has one owner, exact sidebar and reciprocal local neighbours',()=>{
 const seen=new Set()
 for(const item of pages) {
  const {section,topic}=topicFor(nav,item.link)
  assert.ok(section,item.link)
  assert.ok(topic,item.link)
  assert.ok(!seen.has(clean(item.link)),item.link+': doppelt im Menü')
  seen.add(clean(item.link))
  const key=clean(item.link)+(item.link.endsWith('/')?'/index.md':'.md')
  assert.ok(sidebar[key],key)
  const active=nav.nav.filter(entry=>entry.activeMatch&&new RegExp(entry.activeMatch).test(item.link))
  if(section!=='team') assert.deepEqual(active.map(x=>x.text),[nav.sectionLabels[section]],item.link)
  const footer=footerFor(nav,item.link)
  for(const side of ['prev','next']) if(footer[side]) {
   assert.equal(sectionFor(nav,footer[side].link),section,item.link)
   assert.equal(clean(footerFor(nav,footer[side].link)[side==='prev'?'next':'prev'].link),clean(item.link),item.link)
  }
 }
})
test('sequences stop at topic and section boundaries',()=>{
 for(const item of pages) {
  const seq=sequence(nav,item)
  if(topicFor(nav,item.link).topic!==item) continue
  if(!seq.length) continue
  assert.equal(footerFor(nav,seq[0].link).prev,false,item.link)
  assert.equal(footerFor(nav,seq.at(-1).link).next,false,item.link)
 }
 assert.deepEqual(footerFor(nav,'/Datenbanken/'),{prev:false,next:false})
})
test('technical area has three independent roots and preserved environment addresses',()=>{
 const roots=['Datenbanken','Testumgebung','Schulungsumgebung','Weitere Bereiche']
 for(const [url,index] of [['/Datenbanken/testdaten/',0],['/umgebungen/einrichten',1],['/Fachberatung_Anleitungen/Test-_und_Schulungsserver/Docker_Schulungsserver/',2]]) {
  const groups=sidebarFor(nav,url)
  assert.deepEqual(groups.map(x=>x.text),roots)
  assert.equal(groups[index].collapsed,false)
  assert.equal(groups.filter(x=>x.collapsed===false).length,1)
 }
 assert.ok(nav.sections.testdaten[2].items.length>=9)
 assert.ok(!nav.sections.schulungen.some(x=>x.link?.includes('Test-_und_Schulungsserver')))
})
test('onboarding has no collapse control; other areas follow global order',()=>{
 for(const entry of nav.nav) {
  const groups=sidebarFor(nav,entry.link)
  assert.equal(groups.at(-1).text,'Weitere Bereiche')
  assert.equal(groups.at(-1).collapsed,true)
  assert.deepEqual(groups.at(-1).items,nav.nav.filter(x=>x!==entry).map(({text,link})=>({text,link})))
 }
 assert.equal(sidebarFor(nav,'/neu-im-team/')[0].collapsed,undefined)
 assert.equal(sidebarFor(nav,'/neu-im-team/')[0].items.length,3)
})
test('automatic tables reflect the requested topic rather than unrelated work steps',()=>{
 const checks=[
  ['/technik/',nav.sections.testdaten],
  ['/Datenbanken/',nav.sections.testdaten[0].items],
  ['/Datenbanken/testdaten/',nav.sections.testdaten[0].items[0].items],
  ['/Datenbanken/schulungen/',nav.sections.testdaten[0].items[1].items],
  ['/schulungsmodule/',nav.sections.schulungen.filter(x=>x.module)],
  ['/Fachberatung_Anleitungen/Test-_und_Schulungsserver/',nav.sections.testdaten[2].items]
 ]
 for(const [url,items] of checks) {
  assert.deepEqual(overviewRows(nav,url),items.map(({text,link,description})=>({text,link,description})),url)
  const changed=structuredClone(nav)
  const target=url==='/schulungsmodule/'?changed.sections.schulungen:Object.values(changed.sections).flatMap(flatten).find(x=>x.link===url)?.items??changed.sections.testdaten
  target.push({text:'Neuer Inhalt',link:url+'neu',description:'Eine neue Aufgabe.',...(url==='/schulungsmodule/'?{module:true}:{})})
  assert.equal(overviewRows(changed,url).at(-1).text,'Neuer Inhalt',url)
  delete target.at(-1).description
  assert.throws(()=>overviewRows(changed,url),/Kurzbeschreibung fehlt/)
 }
})
test('test data and module bindings remain distinct and complete',()=>{
 const [testdata,training,problem]=nav.sections.testdaten[0].items
 assert.equal(testdata.text,'Testdatenbanken')
 assert.equal(training.text,'Schulungsdatenbanken')
 assert.equal(problem.text,'Problemdatenbanken')
 assert.equal(training.items.length,nav.sections.schulungen.filter(x=>x.module).length)
 for(const name of ['Sekundarstufe I','Berufskolleg']) assert.ok(testdata.items.find(x=>x.text===name).link)
})
test('all existing articles and aliases have a routed owner',()=>{
 const manifest=JSON.parse(readFileSync('tests/portal-content.json','utf8'))
 for(const path of [...manifest.protectedArticles,...manifest.rewritten,...manifest.newArticles]) {
  if(path==='index.md') continue
  assert.ok(sectionFor(nav,'/'+path),path)
 }
 for(const url of Object.keys(nav.aliases)) assert.ok(sidebar[clean(url)+'/index.md'])
})
test('cards link into their own area and dated tips keep their topic',()=>{
 const paths=execFileSync('git',['ls-files','-z','*.md'],{encoding:'utf8'}).split('\0').filter(Boolean)
 let checked=0
 for(const path of paths) {
  if(path==='index.md') continue
  const source=readFileSync(path,'utf8')
  const front=source.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if(!front||!front[1].includes('sectionCards:')) continue
  for(const match of front[1].matchAll(/^\s+link:\s*"([^"]+)"/gm)) {
   assert.equal(sectionFor(nav,match[1]),sectionFor(nav,'/'+path),path)
   checked++
  }
 }
 assert.ok(checked>0)
 for(const topic of nav.sections.wissen.filter(x=>x.items)) for(const article of topic.items) assert.equal(topicFor(nav,article.link).topic,topic)
 const links=nav.sections.wissen.find(x=>x.text==='Wichtige Links')
 assert.equal(links.items,undefined)
})
