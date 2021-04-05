import type { GetStaticProps } from 'next'
import type { HomeProps } from '@/queries/home/types'
import Link from 'next/link'
import { client } from '@/lib/client'
import ProjectsList from '@/components/ui/project/projectsList'

function Home({ homeContent }: HomeProps): JSX.Element {
  return (
    <div>
      <h1>{homeContent.title}</h1>

      <ProjectsList projects={homeContent.projects} />

      <p>{homeContent.description}</p>

      <Link href="/contact" passHref>
        <a href="contact">Contactez moi</a>
      </Link>
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
