import type { Photo } from '@/lib/shared/types/photo'
import type { SEOMetaTag } from '@/lib/shared/types/seo'

export interface ServicesProps {
  prestationContent: Prestation
}

export interface Services {
  data: PrestationData
}

export interface PrestationData {
  prestation: Prestation
}

export interface Prestation {
  description: string
  title: string
  services: Service[]
  _seoMetaTags: SEOMetaTag[]
}

export interface Service {
  id: string
  title: string
  subTitle: string
  text: Text
  infos: Infos
  photo: Photo
}

export interface Infos {
  value: InfosValue
}

export interface InfosValue {
  schema: string
  document: PurpleDocument
}

export interface PurpleDocument {
  type: string
  children: PurpleChild[]
}

export interface PurpleChild {
  type: string
  children: FluffyChild[]
}

export interface FluffyChild {
  type: string
  marks?: string[]
  value: string
}

export interface Text {
  value: TextValue
}

export interface TextValue {
  schema: string
  document: FluffyDocument
}

export interface FluffyDocument {
  type: string
  children: TentacledChild[]
}

export interface TentacledChild {
  type: string
  children: StickyChild[]
}

export interface StickyChild {
  type: string
  value: string
}
