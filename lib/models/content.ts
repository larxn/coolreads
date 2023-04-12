import { GetActivitiesByUserQuery } from '@/.output/graphql/graphql'

/*-------------------------------------
  Common
-------------------------------------*/
export type AuthorName = {
  firstName: string
  lastName: string
}

export type Book = {
  id: string
  title: string
  authors: AuthorName[]
  summary: string
  coverUrl: string
}

/*-------------------------------------
  Content Types
-------------------------------------*/
export type BookList = Exclude<
  GetActivitiesByUserQuery['activities'][number]['bookList'],
  null | undefined
>

export type Quote = Exclude<
  GetActivitiesByUserQuery['activities'][number]['quote'],
  null | undefined
>

export type Review = Exclude<
  GetActivitiesByUserQuery['activities'][number]['review'],
  null | undefined
>

export type ActivityType = 'review' | 'quote' | 'bookList'
