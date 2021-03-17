import type { HomeContent } from '@/queries/home/types'
import type { LayoutContent } from '@/queries/layout/types'
import type { NormalizedCacheObject } from '@apollo/client'

import { homeQuery } from '@/queries/home/gql'
import { ApolloClient, InMemoryCache } from '@apollo/client'

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

  getHome = async (): Promise<{ home: HomeContent; layout: LayoutContent }> => {
    const { data } = await this.client.query({
      query: homeQuery,
    })

    const home: HomeContent = data.home
    const layout: LayoutContent = data.layout

    return { home, layout }
  }
}

export const client = new Client()
