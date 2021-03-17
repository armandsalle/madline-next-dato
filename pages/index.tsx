import type { GetStaticProps } from 'next'
import type { HomeProps } from '@/queries/home/types'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/lib/client'

function Home({ homeContent, layoutContent }: HomeProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={layoutContent.siteLogo.url} />
      <h1>{homeContent.title}</h1>
      <p>{homeContent.description}</p>
      {homeContent.projects.map((e) => (
        <Link href={`/gallery/${e.uid}`} key={e.id}>
          <a>
            <div style={{ position: 'relative', width: 420 }}>
              <Image
                src={e.photos[0].url}
                alt={`${homeContent.title} thumbnail`}
                layout="responsive"
                width={e.photos[0].width}
                height={e.photos[0].height}
              />
            </div>
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
