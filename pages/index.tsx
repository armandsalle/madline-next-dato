import type { GetStaticProps } from 'next'
import type { HomeProps } from '@/queries/home/types'

import Link from 'next/link'
import { client } from '@/lib/client'
import { Image } from 'react-datocms'

function Home({ homeContent }: HomeProps): JSX.Element {
  return (
    <div>
      <h1>{homeContent.title}</h1>
      <p>{homeContent.description}</p>
      {homeContent.projects.map((e) => (
        <Link href={`/gallery/${e.uid}`} key={e.id}>
          <a style={{ width: '90%', margin: '0 auto', display: 'block' }}>
            <Image
              data={e.photos[0].responsiveImage}
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
            <p>{e.title}</p>
          </a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.getHome()
  const { layout, site } = await client.getLayout()

  return {
    props: {
      homeContent: home,
      layoutContent: layout,
      siteContent: site,
    },
  }
}

export default Home
