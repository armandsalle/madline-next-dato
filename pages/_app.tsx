import type { AppProps } from 'next/app'
import type { LayoutContent, SiteContent } from '@/queries/layout/types'

import '@/styles/globals.scss'
import Layout from '@/components/hoc/layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const {
    layoutContent,
    siteContent,
    SEO,
  }: { layoutContent: LayoutContent; siteContent: SiteContent; SEO } = pageProps

  return (
    <Layout layoutContent={layoutContent} siteContent={siteContent} SEO={SEO}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
