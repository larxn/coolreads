import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './database/graphql/models/*.gql',
  documents: './database/graphql/operations/**/*.gql',
  generates: {
    '.output/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
