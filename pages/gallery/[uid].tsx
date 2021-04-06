import type { ProjectItem } from '@/lib/queries/projects/types'
import type { GetStaticPaths, GetStaticProps } from 'next'

import Title from '@/components/ui/title'
import Quote from '@/components/ui/quote'
import { client } from '@/lib/client'
import ProjectsList from '@/components/ui/project/projectsList'

function Project({ project }: { project: ProjectItem }): JSX.Element {
  return (
    <>
      <Title text={project.title} />
      <ProjectsList photos={project.photos} title={project.title} />
      <Quote content={project.description} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { uids } = await client.getAllProjectsWithSlug()

  return {
    paths: uids || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const uid = context.params.uid as string

  const { layout, site } = await client.getLayout()
  const project = await client.getProject(uid)

  return {
    props: {
      layoutContent: layout,
      siteContent: site,
      project,
      SEO: project._seoMetaTags,
    },
  }
}

export default Project
