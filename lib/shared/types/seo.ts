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
