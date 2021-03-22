export interface Projects {
  data: ProjectsContent
}

export interface ProjectsContent {
  allProjects: AllProject[]
}

export interface AllProject {
  uid: string
}
