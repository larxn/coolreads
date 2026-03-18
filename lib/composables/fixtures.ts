import { activities } from '@/data/fixtures/activities'
import { reviews } from '@/data/fixtures/reviews'
import { quotes } from '@/data/fixtures/quotes'
import { bookLists } from '@/data/fixtures/bookLists'
import { books } from '@/data/fixtures/books'
import { authors } from '@/data/fixtures/authors'
import { users } from '@/data/fixtures/user'
import { socialMetas } from '@/data/fixtures/socialMetas'
import { comments } from '@/data/fixtures/comments'
import { authorToBook } from '@/data/fixtures/authorToBook'
import { bookToBookList } from '@/data/fixtures/bookToBookList'
import { socialMetaToUser } from '@/data/fixtures/socialMetaToUser'
import type {
  ActivityFeed,
  ActivityStats,
  ActivityType,
} from '@/lib/models/content'

function getUser(userId: number) {
  const u = users.find((u) => u.id === userId)!
  return {
    id: u.id,
    username: u.username,
    firstName: u.firstName,
    lastName: u.lastName,
    avatarUrl: u.avatarUrl,
  }
}

function getAuthorsForBook(bookId: number) {
  const authorIds = authorToBook.filter((r) => r.B === bookId).map((r) => r.A)
  return authors
    .filter((a) => authorIds.includes(a.id))
    .map((a) => ({
      id: a.id,
      firstName: a.firstName,
      lastName: a.lastName,
    }))
}

export function getBook(bookId: number) {
  const b = books.find((b) => b.id === bookId)!
  return {
    ...b,
    authors: getAuthorsForBook(b.id),
  }
}

function getSocialMeta(socialMetaId: number | null) {
  if (!socialMetaId) return null
  const sm = socialMetas.find((s) => s.id === socialMetaId)
  if (!sm) return null
  const likeUserIds = socialMetaToUser
    .filter((r) => r.A === sm.id)
    .map((r) => r.B)
  const smComments = comments.filter((c) => c.socialMetaId === sm.id)
  return {
    id: String(sm.id),
    likes: likeUserIds.map((id) => ({ id: id })),
    comments: smComments.map((c) => ({ id: c.id })),
  }
}

function resolveReview(reviewId: number) {
  const r = reviews.find((r) => r.id === reviewId)
  if (!r) return null
  return {
    ...r,
    user: getUser(r.userId),
    book: getBook(r.bookId),
    socialMeta: getSocialMeta(r.socialMetaId),
  }
}

function resolveQuote(quoteId: number) {
  const q = quotes.find((q) => q.id === quoteId)
  if (!q) return null
  return {
    content: q.content,
    createdAt: q.createdAt,
    user: getUser(q.userId),
    book: getBook(q.bookId),
    socialMeta: getSocialMeta(q.socialMetaId),
  }
}

function resolveBookList(bookListId: number) {
  const bl = bookLists.find((bl) => bl.id === bookListId)
  if (!bl) return null
  const bookIds = bookToBookList.filter((r) => r.B === bl.id).map((r) => r.A)
  const listBooks = books
    .filter((b) => bookIds.includes(b.id))
    .map((b) => ({
      id: b.id,
      title: b.title,
      coverUrl: b.coverUrl,
    }))
  return {
    ...bl,
    user: getUser(bl.userId),
    books: listBooks,
    socialMeta: getSocialMeta(bl.socialMetaId),
  }
}

export function useFixtures() {
  return {
    getActivitiesByUser(variables: {
      userId: number
      take: number
      skip?: number | null
      activityType?: ActivityType | string | null
    }): { activities: ActivityFeed } {
      const { userId, take, skip = 0, activityType } = variables

      const typeFilter = activityType
        ? (a: (typeof activities)[number]) =>
            a[`${activityType}Id` as keyof typeof a] !== null
        : () => true

      const filtered = activities
        .filter((a) => a.userId === userId && typeFilter(a))
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )

      const totalItems = activities.filter((a) => a.userId === userId).length
      const paged = filtered.slice(skip ?? 0, (skip ?? 0) + take)
      const hasNextPage = filtered.length - (skip ?? 0) - paged.length > 0

      const nodes = paged.map((a) => ({
        ...a,
        review: a.reviewId ? resolveReview(a.reviewId) : null,
        quote: a.quoteId ? resolveQuote(a.quoteId) : null,
        bookList: a.bookListId ? resolveBookList(a.bookListId) : null,
      }))

      return {
        activities: {
          nodes,
          pageInfo: { totalItems, hasNextPage },
        },
      }
    },

    getActivityStatsByUser(variables: { userId: number }): {
      activityStats: ActivityStats
    } {
      const { userId } = variables
      const userActivities = activities.filter((a) => a.userId === userId)
      return {
        activityStats: {
          reviews: userActivities.filter((a) => a.reviewId !== null).length,
          quotes: userActivities.filter((a) => a.quoteId !== null).length,
          bookLists: userActivities.filter((a) => a.bookListId !== null).length,
        },
      }
    },
  }
}
