import { gql } from '@apollo/client'

export const aboutQuery = gql`
  query AboutQuery {
    about {
      title
      text(markdown: true)
      description(markdown: true)
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
