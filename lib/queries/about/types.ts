import type { SEOMetaTag } from '@/lib/shared/types/seo'
import type { Photo } from '@/lib/shared/types/photo'

export interface AboutProps {
  aboutContent: AboutContent
}

export interface AboutQuery {
  data: AboutData
}

export interface AboutData {
  about: AboutContent
}

export interface AboutContent {
  title: string
  text1: string
  text2: string
  description: string
  photo: Photo
  _seoMetaTags: SEOMetaTag[]
}
