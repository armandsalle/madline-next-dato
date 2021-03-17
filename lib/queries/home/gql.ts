import { gql } from '@apollo/client'
import { layoutQuery } from '@/queries/layout/gql'

export const homeQuery = gql`
  ${layoutQuery}
  query HomeQuery {
    layout {
      ...Layout
    }
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
