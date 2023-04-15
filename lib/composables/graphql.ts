import { GraphQLClient } from 'graphql-request'
import { getSdk } from '@/.gen/graphql'

let client: GraphQLClient

export function useGraphQL() {
  const $config = useRuntimeConfig()

  if (!client) {
    client = new GraphQLClient(`${$config.public.baseUrl}/api/graphql`)
  }
  return getSdk(client)
}
