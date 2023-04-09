import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { schema } from '#graphql/schema'
import resolvers from '@/database/graphql/resolvers'

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default startServerAndCreateH3Handler(server)
