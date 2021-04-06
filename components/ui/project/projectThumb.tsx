import type { Project } from '@/lib/queries/home/types'

import { Image } from 'react-datocms'
import Link from 'next/link'

interface ProjectProps {
  project: Project
}
const ProjectThumb = ({ project }: ProjectProps): JSX.Element => {
  // Add title and alt if photos do not have them
  if (!project.photos[0].responsiveImage.title) {
    project.photos[0].responsiveImage.title = project.title
    project.photos[0].responsiveImage.alt = project.title
  }

  const thumbImage = project.photos[0].responsiveImage

  return (
    <Link href={`/gallery/${project.uid}`} key={project.id}>
      <a className="home-project_link">
        <article>
          <Image
            data={thumbImage}
            explicitWidth={true}
            lazyLoad={true}
            fadeInDuration={250}
            intersectionMargin="-100px 0px 100px 0px"
            style={{
              maxWidth: 420,
              width: '100%',
              border: 'none',
              overflow: 'hidden',
              display: 'block',
            }}
            pictureStyle={{
              border: 'none',
              maxWidth: 420,
              width: '100%',
              overflow: 'hidden',
            }}
          />
          <p className="home-project_title">{project.title}</p>
        </article>
      </a>
    </Link>
  )
}

export default ProjectThumb
