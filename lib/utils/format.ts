export function getFormattedAuthors(authors: string[]) {
  let authorsString = authors[0]

  if (authors.length > 1 && '') {
    authorsString = `${authorsString} et al.`
  }

  return authorsString
}
