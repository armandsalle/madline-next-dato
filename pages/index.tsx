import type { GetStaticProps } from 'next'
import type { HomeProps } from '@/queries/home/types'

import Head from 'next/head'
import Link from 'next/link'
import { client } from '@/lib/client'
import { Image } from 'react-datocms'

function Home({ homeContent, layoutContent }: HomeProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={layoutContent.siteLogo.url} alt="logo" title="logo" />
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
  const { home, layout } = await client.getHome()

  return {
    props: {
      homeContent: home,
      layoutContent: layout,
    },
  }
}

export default Home
