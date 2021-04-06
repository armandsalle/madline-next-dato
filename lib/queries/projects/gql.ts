import { gql } from '@apollo/client'

export const projectsSlugQuery = gql`
  query ProjectsSlugQuery {
    allProjects {
      uid
    }
  }
`

export const projectQuery = gql`
  query ProjectQuery($uid: String!) {
    project(filter: { uid: { eq: $uid } }) {
      title
      description
      photos {
        responsiveImage(imgixParams: { w: "840", fit: fill, auto: format }) {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          aspectRatio
          alt
        }
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
