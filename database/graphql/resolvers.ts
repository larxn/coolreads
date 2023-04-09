import { PrismaClient } from '@prisma/client'
import { QueryActivitiesArgs } from '@/.output/graphql/graphql'

const prisma = new PrismaClient()

export default {
  Query: {
    activities: async (_ctx: {}, { userId, take }: QueryActivitiesArgs) =>
      prisma.activity.findMany({
        take,
        where: { userId },
        include: {
          review: {
            include: {
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
            },
          },
          quote: {
            include: {
              user: true,
            },
          },
          bookList: {
            include: {
              user: true,
            },
          },
        },
      }),
  },
}
