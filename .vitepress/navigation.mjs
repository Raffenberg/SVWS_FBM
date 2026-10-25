// Gemeinsame Zuständigkeit, Lesereihenfolge und native Sidebar.
export const clean = url => decodeURIComponent(url.split(/[?#]/, 1)[0])
  .replace(/(?:\/index)?\.(?:md|html)$/, '').replace(/\/$/, '') || '/'
export const flatten = items => items.flatMap(item => [item, ...flatten(item.items ?? [])])
export function sectionFor(navigation, url) {
  const target = clean(url)
  return Object.entries(navigation.routes).sort(([a], [b]) => b.length - a.length)
    .find(([prefix]) => target === clean(prefix) || target.startsWith(clean(prefix) + '/'))?.[1]
}
function trailFor(items, target, trail = []) {
  for (const item of items) {
    if (item.link && !item.link.includes('#') && clean(item.link) === target) return [...trail, item]
    const found = trailFor(item.items ?? [], target, [...trail, item])
    if (found) return found
  }
}
export function topicFor(navigation, url) {
  const section = sectionFor(navigation, url)
  const groups = navigation.sections[section] ?? []
  const target = clean(url)
  const canonical = clean(navigation.aliases?.[target + '/'] ?? navigation.aliases?.[target] ?? target)
  const trail = trailFor(groups, canonical) ?? []
  const topic = trail.at(-1)?.items?.length ? trail.at(-1) : trail.at(-2)?.readingOrder === 'none' ? trail.at(-1) : trail.at(-2) ?? trail.at(-1)
  return { section, groups, topic, trail }
}
export function sequence(navigation, topic) {
  if (topic?.readingOrder === 'none') return []
  const seen = new Set()
  return [topic, ...topic?.items ?? []].filter(item => {
    if (!item?.link || item.link.includes('#')) return false
    const target = clean(item.link)
    if (sectionFor(navigation, target) !== sectionFor(navigation, topic.link ?? item.link) || seen.has(target)) return false
    if (item !== topic && item.items?.length) return false
    seen.add(target)
    return true
  })
}
export function footerFor(navigation, url) {
  const { topic } = topicFor(navigation, url)
  const pages = sequence(navigation, topic)
  const index = pages.findIndex(item => clean(item.link) === clean(url))
  const entry = item => item ? { text: item.text, link: item.link } : false
  return { prev: index < 0 ? false : entry(pages[index - 1]), next: index < 0 ? false : entry(pages[index + 1]) }
}
export function sidebarFor(navigation, url) {
  const { section, trail } = topicFor(navigation, url)
  if (!section) return []
  const map = items => items.map(item => ({
    ...item, ...(item.items?.length ? { collapsed: !trail.includes(item), items: map(item.items) } : {})
  }))
  const topics = map(navigation.sections[section])
  const others = {
    text: 'Weitere Bereiche', collapsed: true,
    items: navigation.nav.filter(item => sectionFor(navigation, item.link) !== section).map(({ text, link }) => ({ text, link }))
  }
  if (section === 'team') return [...topics.map(({ collapsed, ...group }) => group), others]
  if (section === 'testdaten') return [...topics, others]
  return [{ text: navigation.sectionLabels[section], items: topics }, others]
}
export function createSidebar(navigation) {
  const exact = {}
  for (const item of [...navigation.nav, ...Object.values(navigation.sections).flatMap(flatten)]) {
    if (!item.link || item.link.includes('#')) continue
    const target = clean(item.link)
    exact[target + (item.link.endsWith('/') ? '/index.md' : '.md')] = sidebarFor(navigation, target)
  }
  for (const alias of Object.keys(navigation.aliases ?? {})) exact[clean(alias) + '/index.md'] = sidebarFor(navigation, alias)
  const prefixes = Object.keys(navigation.routes).sort((a,b) => b.length-a.length).map(prefix => [prefix, sidebarFor(navigation, prefix)])
  return { ...exact, ...Object.fromEntries(prefixes) }
}
