import { ApolloServer } from '@apollo/server'
import { startServerAndCreateH3Handler } from '@as-integrations/h3'
import { gql } from 'graphql-tag'
import { getFileContent } from '@/lib/utils/system'

import resolvers from '@/database/graphql/resolvers'

const schema = getFileContent('./database/graphql/models', 'schema.gql')

const server = new ApolloServer({
  typeDefs: gql`
    ${schema}
  `,
  resolvers,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default startServerAndCreateH3Handler(server)
