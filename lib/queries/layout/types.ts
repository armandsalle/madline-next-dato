import { SEOMetaTag } from '@/lib/shared/types/seo'

export interface Layout {
  data: LayoutData
}

export interface LayoutData {
  _site: SiteContent
  layout: LayoutContent
}

export interface SiteContent {
  faviconMetaTags: FaviconMetaTag[]
}

export interface Favicon {
  url: string
}

export interface LayoutContent {
  instagram: string
  mail: string
  facebook: string
  phone: string
  siteTitle: string
  siteLogo: Favicon
  _seoMetaTags: SEOMetaTag[]
}

export interface FaviconMetaTag {
  content: null
  attributes: FaviconMetaTagAttributes
  tag: string
}

export interface FaviconMetaTagAttributes {
  sizes: string
  type: string
  rel: string
  href: string
}

export interface SiteLogo {
  url: string
}
