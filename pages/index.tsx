import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../lib/client'
import { gql } from '@apollo/client'

function Home({ home }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{home.title}</h1>
      <p>{home.description}</p>
      {home.projects.map((e) => (
        <Link href={`/gallery/${e.uid}`} key={e.id}>
          <a>
            <div style={{ position: 'relative', width: 420 }}>
              <Image
                src={e.photos[0].url}
                alt={`${home.title} thumbnail`}
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

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query HomeQuery {
        home {
          title
          description
          projects {
            id
            uid
            title
            photos {
              url(imgixParams: { w: "840", fit: fill })
              width
              height
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      home: data.home,
    },
  }
}
