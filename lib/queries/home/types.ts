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
  responsiveImage: ResponsiveImage
}

export interface ResponsiveImage {
  srcSet: string
  webpSrcSet: string
  sizes: Sizes
  src: string
  width: number
  height: number
  aspectRatio: number
  alt: null
  title: null
  base64: string
}

export enum Sizes {
  MaxWidth840Px100Vw840Px = '(max-width: 840px) 100vw, 840px',
}
