import type { Photo } from '@/lib/shared/types/photo'
import type { SEOMetaTag } from '@/lib/shared/types/seo'

export interface Projects {
  data: ProjectsContent
}

export interface ProjectsContent {
  allProjects: AllProject[]
}

export interface AllProject {
  uid: string
}

export interface Project {
  data: ProjectContent
}

export interface ProjectContent {
  project: ProjectItem
}

export interface ProjectItem {
  title: string
  description: string
  photos: Photo[]
  _seoMetaTags: SEOMetaTag[]
}
