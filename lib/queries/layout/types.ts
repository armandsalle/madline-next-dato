export interface Layout {
  data: LayoutData
}

export interface LayoutData {
  layout: LayoutContent
}

export interface LayoutContent {
  phone: string
  pinterest: string
  siteTitle: string
  siteLogo: SiteLogo
  _seoMetaTags: SEOMetaTag[]
  instagram: string
  mail: string
  facebook: string
}

export interface SEOMetaTag {
  attributes: Attributes | null
  content: null | string
  tag: Tag
}

export interface Attributes {
  property?: string
  content: string
  name?: string
}

export enum Tag {
  Meta = 'meta',
  Title = 'title',
}

export interface SiteLogo {
  url: string
}
