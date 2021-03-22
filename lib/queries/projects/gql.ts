import { gql } from '@apollo/client'

export const projectsSlugQuery = gql`
  query ProjectsSlugQuery {
    allProjects {
      uid
    }
  }
`
