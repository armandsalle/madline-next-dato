import type { LayoutContent, SiteContent, SEOMetaTag } from '@/lib/queries/layout/types'

import Head from 'next/head'
import { renderMetaTags } from 'react-datocms'
import Nav from '../ui/nav'
import Footer from '../ui/footer'
import { ReactNode } from 'react'

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
        {!SEO &&
          layoutContent &&
          renderMetaTags((layoutContent._seoMetaTags as any[]).concat(siteContent.faviconMetaTags))}
        {SEO && renderMetaTags((SEO as any[]).concat(siteContent.faviconMetaTags))}
      </Head>

      <Nav logoUrl={layoutContent.siteLogo.url} />
      <section className="site">{children}</section>
      <Footer email={layoutContent.mail} phone={layoutContent.phone} />
    </main>
  )
}

export default Layout
