import { PrismaClient } from '@prisma/client'
import { QueryActivitiesArgs } from '@/.output/graphql/graphql'

const prisma = new PrismaClient()

export default {
  Query: {
    activities: async (_ctx: {}, { userId, take }: QueryActivitiesArgs) => {
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

      return prisma.activity.findMany({
        take,
        where: { userId },
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
