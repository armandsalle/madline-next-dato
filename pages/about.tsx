import type { GetStaticProps } from 'next'
import type { AboutProps } from '@/queries/about/types'

import { client } from '@/lib/client'
import { Image } from 'react-datocms'

function About({ aboutContent }: AboutProps): JSX.Element {
  return (
    <div>
      <h1>{aboutContent.title}</h1>

      <Image
        data={aboutContent.photo.responsiveImage}
        explicitWidth={true}
        lazyLoad={false}
        style={{
          width: 420,
          border: 'none',
          overflow: 'hidden',
          display: 'block',
        }}
        pictureStyle={{
          border: 'none',
          width: 420,
          overflow: 'hidden',
        }}
      />

      <div
        dangerouslySetInnerHTML={{ __html: aboutContent.text }}
        style={{
          columnCount: 2,
          columnGap: '10px',
          width: '560px',
        }}
      ></div>
      <div dangerouslySetInnerHTML={{ __html: aboutContent.description }}></div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { about } = await client.getAbout()
  const { layout, site } = await client.getLayout()

  return {
    props: {
      aboutContent: about,
      layoutContent: layout,
      siteContent: site,
      SEO: about._seoMetaTags,
    },
  }
}

export default About
