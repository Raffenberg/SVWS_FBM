import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { createMarkdownRenderer } from 'vitepress'
import { clean, sectionFor, createSidebar, flatten } from '../.vitepress/navigation.mjs'
const manifest = JSON.parse(readFileSync('tests/portal-content.json','utf8'))
const nav = JSON.parse(readFileSync('.vitepress/sidebar.json','utf8'))
const git = (...args) => execFileSync('git',args,{encoding:'utf8',maxBuffer:32*1024*1024})
const read = path => readFileSync(path,'utf8')
const old = path => git('show',manifest.base+':'+path)
const images = source => [...source.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m=>m[1])
const code = source => [...source.matchAll(/^([ \t]*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\2[ \t]*$/gm)].map(m=>m[0])
const markdown = await createMarkdownRenderer(process.cwd())
for (const path of manifest.protectedArticles) assert.equal(read(path),old(path),path+': Fachbestand ohne redaktionelle Freigabe verändert')
for (const path of manifest.rewritten) {
  const before=old(path),current=read(path)
  assert.ok(existsSync(path),path+': Adresse fehlt')
  for(const image of images(before)) assert.ok(images(current).includes(image),path+': Bildverweis fehlt: '+image)
  for(const block of code(before)) assert.ok(code(current).includes(block),path+': Codebeispiel verändert')
  for(const match of before.matchAll(/\{#([^}]+)\}/g)) assert.ok(current.includes('{#'+match[1]+'}')||current.includes('id="'+match[1]+'"'),path+': historischer Anker fehlt: '+match[1])
}
for (const path of manifest.newArticles) {
  const source=read(path)
  assert.equal(markdown.parse(source,{}).filter(t=>t.type==='heading_open'&&t.tag==='h1').length,1,path+': Artikeltitel')
  assert.ok(source.length>600,path+': kein nutzbarer Artikel')
  assert.ok(sectionFor(nav,'/'+path),path+': Bereich fehlt')
}
const diff=git('diff','--name-only',manifest.base,'--','Datenbanken','Fachberatung_Anleitungen/Test-_und_Schulungsserver').trim().split('\n').filter(Boolean)
assert.ok(diff.every(path=>path.endsWith('.md')),'Datenbank-/Medien-/Skriptbestand verändert')
for(const path of ['package.json','package-lock.json','eslint.config.js','.vitepress/theme/print.css','.vitepress/theme/components/DownloadPdf.vue']) assert.equal(read(path),old(path),path+': zurückgestellter Bereich verändert')
const strip=source=>source.replace(/\n\n::: info Veranstaltungsunterlagen – keine vollständige Anleitung[\s\S]*?\n:::\n/,'')
const events=manifest.rewritten.filter(p=>/^Fachberatung_Fortbildungen\/[^/]+\/index\.md$/.test(p)&&!p.includes('Installation_Fachberatung_Moderation_offline'))
assert.equal(events.length,20)
for(const path of events) assert.equal(strip(read(path)),old(path),path+': Veranstaltungsbestand verändert')
const modules=nav.sections.schulungen.filter(item=>item.module)
const bindings=nav.sections.testdaten[0].items.find(item=>item.text==='Schulungsdatenbanken').items
assert.equal(bindings.length,modules.length,'Modulzuordnungen unvollständig')
for(const module of modules) {
 const article=bindings.find(item=>item.text===module.text)
 assert.ok(read(article.link.slice(1)+'.md').includes(module.link),module.text+': Bezug zum Modul fehlt')
 assert.ok(read(article.link.slice(1)+'.md').includes('Zuordnungsstand'),module.text+': Prüfstatus fehlt')
}
const problem=read('Datenbanken/problemdatenbanken.md')
assert.ok(!/\]\([^)]*\.(?:sqlite|mdb|zip)\)/.test(problem),'Problemdaten dürfen nicht öffentlich angeboten werden')
assert.ok(problem.includes('getrennten vereinbarten Kanal'))
assert.ok(read('umgebungen/schild2.md').includes('SchILD2-Migrationstool'))
assert.ok(read('umgebungen/dbeaver.md').includes('Ohne Microsoft Access'))
assert.ok(read('fortbildung/inhaltsstand.md').includes('Referierende'))
for(const item of Object.values(nav.sections).flatMap(flatten)) if(item.link&&!item.link.includes('#')) assert.ok(createSidebar(nav)[clean(item.link)+(item.link.endsWith('/')?'/index.md':'.md')],item.link+': gezielte Sidebar fehlt')
console.log('Portal: '+manifest.rewritten.length+' autorisierte Überarbeitungen, '+manifest.newArticles.length+' neue Artikel, '+manifest.protectedArticles.length+' unveränderte Fachseiten; Medien, Code, Anker, Module und Inhaltsarten geprüft.')
