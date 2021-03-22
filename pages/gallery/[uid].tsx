import type { GetStaticPaths, GetStaticProps } from 'next'

import { client } from '@/lib/client'
// import { Image } from 'react-datocms'

function Project(): JSX.Element {
  return (
    <div>
      <h1>Project</h1>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { uids } = await client.getAllProjectsWithSlug()

  return {
    paths: uids || [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { layout, site } = await client.getLayout()

  return {
    props: {
      layoutContent: layout,
      siteContent: site,
    },
  }
}

export default Project
