import type { SEOMetaTag } from '@/lib/shared/types/seo'
import type { Photo } from '@/lib/shared/types/photo'

export interface ContactProps {
  contactContent: ContactContent
}

export interface Contact {
  data: ContactData
}

export interface ContactData {
  contact: ContactContent
}

export interface ContactContent {
  title: string
  text: string
  photo: Photo
  _seoMetaTags: SEOMetaTag[]
}
