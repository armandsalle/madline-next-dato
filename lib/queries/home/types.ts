import type { Photo } from '@/lib/shared/types/photo'
import type { LayoutContent, SiteContent } from '../layout/types'

export interface HomeProps {
  homeContent: HomeContent
  LayoutContent: LayoutContent
  SiteContent: SiteContent
}

export interface HomeQuery {
  data: HomeData
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
