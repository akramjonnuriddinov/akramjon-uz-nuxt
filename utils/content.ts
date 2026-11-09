/** "HairDraft — AI Hair-Styling Preview" -> "HairDraft" */
export const shortTitle = (title = '') => title.split(' — ')[0]

export const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, '')

/** Post dates are written as dd/mm/yyyy, which does not sort as a string. */
const publishedTime = (published = '') => {
  const [day, month, year] = published.split('/').map(Number)
  return year ? Date.UTC(year, month - 1, day) : 0
}

export const byNewest = (a: { published?: string }, b: { published?: string }) =>
  publishedTime(b.published) - publishedTime(a.published)

export const publishedYear = (published = '') => published.split('/')[2] ?? ''
