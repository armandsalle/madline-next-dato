import type { LayoutContent } from '../layout/types'

export interface HomeProps {
  homeContent: HomeContent
  layoutContent: LayoutContent
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
