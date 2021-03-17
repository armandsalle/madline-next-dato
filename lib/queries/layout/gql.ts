import { gql } from '@apollo/client'

export const layoutQuery = gql`
  fragment Layout on LayoutRecord {
    instagram
    mail
    facebook
    phone
    pinterest
    siteTitle
    siteLogo {
      url
    }
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
`
