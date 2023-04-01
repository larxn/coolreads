import { User } from './user'

/*-------------------------------------
  Common
-------------------------------------*/
export type Book = {
  id: string
  title: string
  authors: string[]
  summary: string
  coverUrl: string
}

type ActivityMeta = {
  publishedAt: string
  comments: string[]
  likes: number
}

/*-------------------------------------
  Content Types
-------------------------------------*/
export type List = {
  user: User
  books: Omit<Book, 'summary'>[]
  name: string
  meta: ActivityMeta
}

export type Quote = {
  user: User
  book: Omit<Book, 'coverUrl' | 'summary'>
  quote: string
  meta: ActivityMeta
}

export type Review = {
  user: User
  book: Omit<Book, 'summary'>
  review: {
    rating: number
    comment: string
  }
  meta: ActivityMeta
}
