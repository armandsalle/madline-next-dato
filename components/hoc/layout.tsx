import type { LayoutContent, SiteContent, SEOMetaTag } from '@/lib/queries/layout/types'
import type { ReactNode } from 'react'

import { renderMetaTags } from 'react-datocms'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  layoutContent: LayoutContent
  siteContent: SiteContent
  SEO: SEOMetaTag[]
}

const Layout = ({ children, layoutContent, siteContent, SEO }: LayoutProps): JSX.Element => {
  return (
    <main className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {!SEO &&
          layoutContent &&
          renderMetaTags((layoutContent._seoMetaTags as any[]).concat(siteContent.faviconMetaTags))}
        {SEO && renderMetaTags((SEO as any[]).concat(siteContent.faviconMetaTags))}
      </Head>

      <Header logoUrl={layoutContent.siteLogo.url} />
      <section className="site">{children}</section>
      <Footer email={layoutContent.mail} phone={layoutContent.phone} />
    </main>
  )
}

export default Layout
