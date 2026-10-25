import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { recentTips } from '../.vitepress/recent.mjs'
const sources=[{product:'SchILD',source:readFileSync('wissen/schild-tipps.md','utf8')},{product:'SVWS',source:readFileSync('wissen/svws-tipps.md','utf8')}]
test('recent notices derive from both existing tables without duplicate content',()=>{
 const all=recentTips(sources,100)
 const expectedCount=sources.flatMap(x=>x.source.split('\n')).filter(line=>/\b\d{2}\.\d{2}\.\d{4}\b/.test(line)&&/\]\(\//.test(line)).length
 assert.equal(all.length,expectedCount)
 const known=all.find(x=>x.link.endsWith('/bugInOberstufenapp'))
 assert.equal(known.date,'12.10.2026')
 assert.equal(known.product,'SVWS')
 assert.equal(known.title,'Bug in der Oberstufenapp')
 assert.equal(recentTips(sources).length,6)
 assert.ok(all.every((item,i)=>!i||all[i-1].timestamp>=item.timestamp))
 assert.equal(new Set(all.map(x=>x.link)).size,all.length)
})
test('recent notices reject invalid dates and de-duplicate destinations',()=>{
 const source='| 31.02.2026 | [Falsch](/a) |\n| 01.03.2026 | [**Richtig**](/b) |\n| 02.03.2026 | [Doppelt](/b) |'
 assert.deepEqual(recentTips([{product:'Test',source}]).map(x=>[x.title,x.date]),[['Richtig','01.03.2026']])
})
