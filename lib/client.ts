import { homeQuery } from './queries/home/gql'
import { HomeContent } from './queries/home/types'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloQueryResult,
} from '@apollo/client'

export class Client {
  uri: string
  token: string
  client: ApolloClient<NormalizedCacheObject>

  constructor() {
    this.uri = `https://graphql.datocms.com/`
    this.token = process.env.NEXT_DATOCMS_API_TOKEN

    this.client = new ApolloClient({
      uri: this.uri,
      headers: {
        authorization: `Bearer ${this.token}`,
      },
      cache: new InMemoryCache(),
    })
  }

  getHome = async (): Promise<ApolloQueryResult<HomeContent>> => {
    const {
      data: { home },
    } = await this.client.query({
      query: homeQuery,
    })

    return home
  }
}

export const client = new Client()
