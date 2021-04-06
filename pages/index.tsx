import type { GetStaticProps } from 'next'
import type { HomeProps } from '@/queries/home/types'

import ProjectsList from '@/components/ui/project/projectsList'
import Quote from '@/components/ui/quote'
import Title from '@/components/ui/title'
import { client } from '@/lib/client'

function Home({ homeContent }: HomeProps): JSX.Element {
  return (
    <>
      <Title text={homeContent.title} home />
      <ProjectsList projects={homeContent.projects} />
      <Quote content={homeContent.description} />
    </>
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
