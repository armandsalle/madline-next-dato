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

export interface Photo {
  responsiveImage: ResponsiveImage
}

export interface ResponsiveImage {
  srcSet: string
  webpSrcSet: string
  sizes: string
  src: string
  width: number
  height: number
  aspectRatio: number
  alt: string
  title: string
  bgColor: string
}
