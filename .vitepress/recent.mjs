// Nur vorhandene redaktionelle Datumstabellen; kein zweiter Nachrichtenbestand.
export function recentTips(sources,limit=6) {
 const items=[],seen=new Set()
 for(const {product,source} of sources) for(const line of source.split('\n')) {
  const date=line.match(/\b(\d{2})\.(\d{2})\.(\d{4})\b/)
  const link=line.match(/\[([^\]]+)\]\((\/[^)]+)\)/)
  if(!date||!link||seen.has(link[2]))continue
  const [,day,month,year]=date
  const timestamp=Date.UTC(Number(year),Number(month)-1,Number(day))
  const actual=new Date(timestamp)
  if(actual.getUTCDate()!==Number(day)||actual.getUTCMonth()!==Number(month)-1)continue
  seen.add(link[2])
  items.push({date:date[0],product,title:link[1].replace(/\*\*/g,''),link:link[2],timestamp})
 }
 return items.sort((a,b)=>b.timestamp-a.timestamp||a.link.localeCompare(b.link)).slice(0,limit)
}
