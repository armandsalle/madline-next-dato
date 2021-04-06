import type { HomeContent } from '@/queries/home/types'
import type { LayoutContent, SiteContent } from '@/queries/layout/types'
import type { AboutContent } from '@/queries/about/types'
import type { NormalizedCacheObject } from '@apollo/client'

import { homeQuery } from '@/queries/home/gql'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { layoutQuery } from './queries/layout/gql'
import { aboutQuery } from './queries/about/gql'
import { projectQuery, projectsSlugQuery } from './queries/projects/gql'
import { ProjectItem } from './queries/projects/types'
import { contactQuery } from './queries/contact/gql'
import { ContactContent } from './queries/contact/types'

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

  getLayout = async (): Promise<{ layout: LayoutContent; site: SiteContent }> => {
    const { data } = await this.client.query({
      query: layoutQuery,
    })

    const site: SiteContent = data._site
    const layout: LayoutContent = data.layout

    return { site, layout }
  }

  getHome = async (): Promise<{ home: HomeContent }> => {
    const { data } = await this.client.query({
      query: homeQuery,
    })

    const home: HomeContent = data.home

    return { home }
  }

  getAbout = async (): Promise<{ about: AboutContent }> => {
    const { data } = await this.client.query({
      query: aboutQuery,
    })

    const about: AboutContent = data.about

    return { about }
  }

  getAllProjectsWithSlug = async (): Promise<{ uids: string[] }> => {
    const { data } = await this.client.query({
      query: projectsSlugQuery,
    })

    const uids = data.allProjects.map((post) => `/gallery/${post.uid}`)

    return { uids }
  }

  getProject = async (uid: string): Promise<ProjectItem> => {
    const { data } = await this.client.query({
      query: projectQuery,
      variables: { uid },
    })

    const project: ProjectItem = data.project

    return project
  }

  getContact = async (): Promise<ContactContent> => {
    const { data } = await this.client.query({
      query: contactQuery,
    })

    const contact: ContactContent = data.contact

    return contact
  }
}

export const client = new Client()
