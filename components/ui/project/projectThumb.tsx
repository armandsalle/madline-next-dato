import Link from 'next/link'
import { Image } from 'react-datocms'

const ProjectThumb = ({ project }): JSX.Element => {
  // Add title and alt if photos do not have them
  if (!project.photos[0].responsiveImage.title) {
    project.photos[0].responsiveImage.title = project.title
    project.photos[0].responsiveImage.alt = project.title
  }

  const thumbImage = project.photos[0].responsiveImage

  return (
    <Link href={`/gallery/${project.uid}`} key={project.id}>
      <a style={{ width: '90%', margin: '0 auto', display: 'block' }}>
        <Image
          data={thumbImage}
          explicitWidth={true}
          lazyLoad={true}
          fadeInDuration={250}
          intersectionMargin="-100px 0px 100px 0px"
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
        <p>{project.title}</p>
      </a>
    </Link>
  )
}

export default ProjectThumb
