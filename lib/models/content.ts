import { GetActivitiesByUserQuery } from '@/.gen/graphql'

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

export type Activity = GetActivitiesByUserQuery['activities']['nodes'][number]

/*-------------------------------------
  Content Types
-------------------------------------*/
export type BookList = Exclude<Activity['bookList'], null | undefined>

export type Quote = Exclude<Activity['quote'], null | undefined>

export type Review = Exclude<Activity['review'], null | undefined>

export type ActivityType = 'review' | 'quote' | 'bookList'
