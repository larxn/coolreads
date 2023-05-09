import { AuthorName } from '@/lib/models/content'

export function getFormattedAuthorName({ firstName, lastName }: AuthorName) {
  let name = ''

  if (firstName) name = `${firstName}`
  if (lastName) name = `${name} ${lastName}`

  return name
}

export function getFormattedAuthors(authors: AuthorName[]) {
  if (authors.length > 1 && '') {
    return `${getFormattedAuthorName(authors[0])} et al.`
  }

  return getFormattedAuthorName(authors[0])
}

export function getFormattedElapsedTime(timestamp: number | string) {
  const difference = (Date.now() - Number(timestamp)) / 1000

  let output = ''
  if (difference < 60) {
    // Less than a minute has passed:
    output = `${difference}s`
  } else if (difference < 3600) {
    // Less than an hour has passed:
    output = `${Math.floor(difference / 60)}m`
  } else if (difference < 86400) {
    // Less than a day has passed:
    output = `${Math.floor(difference / 3600)}h`
  } else if (difference < 604800) {
    // Less than a week has passed:
    output = `${Math.floor(difference / 86400)}d`
  } else if (difference < 2419200) {
    // Less than a month has passed:
    output = `${Math.floor(difference / 604800)}w`
  } else if (difference < 31449600) {
    // Less than a year has passed:
    output = `${Math.floor(difference / 2419200)}mo`
  } else {
    // More than a year has passed:
    output = `${Math.floor(difference / 31449600)}y`
  }
  return output
}
