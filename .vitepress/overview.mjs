import { clean, flatten, sectionFor } from './navigation.mjs'
// Tabellen stammen aus demselben Bestand wie die Menüs.
export function overviewRows(navigation, url) {
  const groups = navigation.sections[sectionFor(navigation, url)] ?? []
  const topic = flatten(groups).find(item => item.link && clean(item.link) === clean(url) && item.items?.length)
  const items = clean(url) === '/schulungsmodule' ? groups.filter(item => item.module) : topic?.items ?? groups
  return items.filter(item => !item.link || clean(item.link) !== clean(url)).map(item => {
    if (!item.description?.trim()) throw new Error('Kurzbeschreibung fehlt: ' + item.text)
    return { text: item.text, link: item.link, description: item.description }
  })
}
