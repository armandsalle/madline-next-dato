import { gql } from '@apollo/client'

export const servicesQuery = gql`
  query ServicestQuery {
    prestation {
      description
      title
      services {
        id
        title
        subTitle
        text {
          value
        }
        infos {
          value
        }
        photo {
          responsiveImage(imgixParams: { w: 2652, auto: format, fit: fill }) {
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
      }
      _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`
