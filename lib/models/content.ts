/*-------------------------------------
  Common
-------------------------------------*/
export type AuthorName = {
  firstName: string
  lastName: string
}

export type Book = {
  id: number
  title: string
  authors: AuthorName[]
  description: string
  coverUrl: string
}

export type SocialMeta = {
  id: number
  likes: Array<{ id: number }>
  comments: Array<{ id: number }>
}

export type User = {
  id: number
  username: string
  firstName: string
  lastName?: string | null
  avatarUrl: string
}

/*-------------------------------------
  Content Types
-------------------------------------*/
export type Review = {
  content: string
  rating: number
  createdAt: string
  user: User
  book: {
    id: number
    slug: string
    coverUrl: string
    title: string
    authors: Array<{ id: number; firstName: string; lastName: string }>
  }
  socialMeta?: SocialMeta | null
}

export type Quote = {
  content: string
  createdAt: string
  user: User
  book: {
    id: number
    slug: string
    coverUrl: string
    title: string
    authors: Array<{ id: number; firstName: string; lastName: string }>
  }
  socialMeta?: SocialMeta | null
}

export type BookList = {
  name: string
  createdAt: string
  user: User
  books: Array<{ id: number; title: string; coverUrl: string }>
  socialMeta?: SocialMeta | null
}

export type Activity = {
  id: number
  createdAt: string
  review?: Review | null
  quote?: Quote | null
  bookList?: BookList | null
}

export type ActivityFeed = {
  nodes: Activity[]
  pageInfo: {
    totalItems: number
    hasNextPage: boolean
  }
}

export type ActivityStats = {
  reviews: number
  quotes: number
  bookLists: number
}

export type ActivityType = 'review' | 'quote' | 'bookList'
