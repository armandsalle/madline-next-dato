import { gql } from '@apollo/client'

export const layoutFragment = gql`
  fragment Layout on LayoutRecord {
    instagram
    mail
    facebook
    phone
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
export const siteFragment = gql`
  fragment SiteFragment on Site {
    faviconMetaTags {
      content
      attributes
      tag
    }
  }
`
export const layoutQuery = gql`
  ${siteFragment}
  ${layoutFragment}
  query Layout {
    _site {
      ...SiteFragment
    }
    layout {
      ...Layout
    }
  }
`
