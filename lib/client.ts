import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `https://graphql.datocms.com/`,
  headers: {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
