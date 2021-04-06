import { gql } from '@apollo/client'

export const contactQuery = gql`
  query ContactQuery {
    contact {
      title
      text(markdown: true)
      photo {
        responsiveImage(imgixParams: { w: 840, auto: format, fit: fill }) {
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
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
