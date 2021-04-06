import { gql } from '@apollo/client'

export const aboutQuery = gql`
  query AboutQuery {
    about {
      title
      text1
      text2
      description
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
