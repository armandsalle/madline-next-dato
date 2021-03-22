import type { AppProps } from 'next/app'
import type { LayoutContent, SiteContent } from '@/queries/layout/types'

import '@/styles/globals.scss'
import Head from 'next/head'
import Link from 'next/link'
import { renderMetaTags } from 'react-datocms'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const {
    layoutContent,
    siteContent,
    SEO,
  }: { layoutContent: LayoutContent; siteContent: SiteContent; SEO } = pageProps

  return (
    <>
      <Head>
        {!SEO &&
          renderMetaTags((layoutContent._seoMetaTags as any[]).concat(siteContent.faviconMetaTags))}
        {SEO && renderMetaTags((SEO as any[]).concat(siteContent.faviconMetaTags))}
      </Head>
      <img src={layoutContent.siteLogo.url} alt="logo" title="logo" />
      <Link href="/">
        <a>Portfolio</a>
      </Link>
      <Link href="/about">
        <a>A propos</a>
      </Link>

      <Component {...pageProps} />

      <footer>
        <p>{layoutContent.mail}</p>
        <p>{layoutContent.phone}</p>
      </footer>
    </>
  )
}

export default MyApp
