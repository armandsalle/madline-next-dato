import { gql } from '@apollo/client'

export const aboutQuery = gql`
  query AboutQuery {
    about {
      title
      text1(markdown: true)
      text2(markdown: true)
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
          bgColor
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
