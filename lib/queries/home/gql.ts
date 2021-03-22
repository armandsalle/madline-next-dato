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
          url(imgixParams: { w: "700", fit: fill })
          width
          height
          responsiveImage(imgixParams: { w: 840, fit: fill, auto: format }) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
    }
  }
`
