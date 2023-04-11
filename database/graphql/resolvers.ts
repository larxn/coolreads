import { PrismaClient } from '@prisma/client'
import {
  QueryActivitiesArgs,
  QueryActivityStatsArgs,
} from '@/.output/graphql/graphql'

const prisma = new PrismaClient()

export default {
  Query: {
    activityStats: async (_ctx: {}, { userId }: QueryActivityStatsArgs) => {
      const reviews = await prisma.review.count({
        where: { userId },
      })

      const quotes = await prisma.quote.count({
        where: { userId },
      })

      const bookLists = await prisma.bookList.count({
        where: { userId },
      })

      return {
        reviews,
        quotes,
        bookLists,
      }
    },

    activities: async (
      _ctx: {},
      { userId, take, activityType }: QueryActivitiesArgs,
    ) => {
      const common = {
        user: true,
        book: {
          include: {
            authors: true,
          },
        },
        socialMeta: {
          include: {
            likes: true,
            comments: true,
          },
        },
      }

      const activityTypeFilter = activityType
        ? {
            [`${activityType}Id`]: {
              not: null,
            },
          }
        : {}

      return prisma.activity.findMany({
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
        take,
        where: {
          userId,
          ...activityTypeFilter,
        },
        include: {
          review: {
            include: {
              ...common,
            },
          },
          quote: {
            include: {
              ...common,
            },
          },
          bookList: {
            include: {
              user: true,
              books: {
                include: {
                  authors: true,
                },
              },
              socialMeta: common.socialMeta,
            },
          },
        },
      })
    },
  },
}
