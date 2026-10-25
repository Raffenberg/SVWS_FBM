import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
const read = path => readFileSync(path, 'utf8')
const catalog = JSON.parse(read('tests/database-catalogs.json'))
const nav = JSON.parse(read('.vitepress/sidebar.json'))
const git = (...args) => execFileSync('git', args, {encoding:'utf8',maxBuffer:32*1024*1024})
const old = path => git('show',catalog.sourceRef+':'+path)
const downloads = source => [...source.matchAll(/\]\((https:[^)]+\.(?:sqlite|mdb|zip|7z|pdf))\)/g)].map(m=>m[1])
const test = read('Datenbanken/testdaten/index.md')
const training = read('Datenbanken/schulungen/index.md')
assert.equal(nav.sections.testdaten[0].text,'Übersicht')
assert.equal(nav.sections.testdaten[0].link,nav.nav.find(x=>x.text==='Datenbanken & Installation').link)
const group = nav.sections.testdaten.find(x=>x.text==='Datenbanken')
assert.deepEqual(group.items.map(x=>x.text),['Testdatenbanken','Schulungsdatenbanken','Problemdatenbanken'])
for(const item of group.items) assert.equal(item.items,undefined,'Keine weitere Menüebene: '+item.text)
for(const [source,chapters] of [[test,catalog.schoolChapters],[training,catalog.moduleChapters]]) {
 assert.equal((source.match(/^# /gm)||[]).length,1)
 assert.ok(!/Eigenschaften und Einsatzmöglichkeiten|Herkunft und Hinweise|NavigationOverview/.test(source))
 assert.deepEqual([...source.matchAll(/^## (.+?) \{#([^}]+)\}/gm)].map(m=>({text:m[1],id:m[2]})),chapters)
 assert.ok(!/^### /m.test(source),'Keine Unterartikel im Katalog')
 for(const chapter of chapters) {
  const body=source.split('{#'+chapter.id+'}')[1].split('\n## ')[0]
  assert.ok(body.includes('| Datenbank | Kurzbeschreibung |'),chapter.text+': Tabelle fehlt')
  assert.ok(body.split('\n').some(line=>line.startsWith('| ')&&!line.startsWith('| Datenbank')),'Leere Tabelle')
 }
}
for(const [path,target] of Object.entries(catalog.redirects)) {
 const source=read(path)
 assert.ok(source.includes('<DatabaseRedirect to="'+target+'" />'),path+': Weiterleitung fehlt')
 assert.ok(source.includes('search: false'),path+': Doppelter Suchtreffer')
 assert.ok(!/^## /m.test(source),path+': Doppelter Fachartikel')
 for(const link of downloads(old(path))) assert.ok(downloads(test).includes(link)||downloads(training).includes(link),path+': Download verloren: '+link)
 const [page,anchor]=target.split('#')
 const destination=read(page.slice(1)+'index.md')
 assert.ok(destination.includes('{#'+anchor+'}'),path+': Zielkapitel fehlt')
}
assert.equal(read('Datenbanken/problemdatenbanken.md'),old('Datenbanken/problemdatenbanken.md'),'Problemdatenbanken verändert')
assert.equal(read('Datenbanken/steckbrief.md'),old('Datenbanken/steckbrief.md'),'Steckbrief verändert')
assert.deepEqual(git('diff','--name-only',catalog.sourceRef,'--','Datenbanken/').trim().split('\n').filter(p=>p&&!p.endsWith('.md')),[],'Datenbankdateien oder Begleitmaterial verändert')
console.log('Datenbankkataloge: Übersicht, genau drei Menüpunkte, sechs Schulformen, zwölf Module, Weiterleitungen, Download- und Dateierhalt geprüft.')
