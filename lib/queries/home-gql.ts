import { gql } from '@apollo/client'

export interface HomeProps {
  homeContent: HomeContent
}

export interface HomeQuery {
  data: HomeData
  loading: boolean
  networkStatus: number
}

export interface HomeData {
  home: HomeContent
}

export interface HomeContent {
  __typename: string
  title: string
  description: string
  projects: Project[]
}

export interface Project {
  __typename: string
  id: string
  uid: string
  title: string
  photos: Photo[]
}

export interface Photo {
  __typename: Typename
  url: string
  width: number
  height: number
}

export enum Typename {
  FileField = 'FileField',
}

export const homeQuery = gql`
  query HomeQuery {
    home {
      title
      description
      projects {
        id
        uid
        title
        photos {
          url(imgixParams: { w: "840", fit: fill })
          width
          height
        }
      }
    }
  }
`
