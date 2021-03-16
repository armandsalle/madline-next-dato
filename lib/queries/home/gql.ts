import { gql } from '@apollo/client'

export const homeQuery = gql`
  query HomeQuery {
    home {
      title
      description
      projects {
        id
        uid
        title
        photos {
          url(imgixParams: { w: "840", fit: fill })
          width
          height
        }
      }
    }
  }
`
