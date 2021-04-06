import type { Photo } from '@/lib/shared/types/photo'

import { Image } from 'react-datocms'

interface ProjectProps {
  photo: Photo
  title: string
}

const ProjectThumb = ({ photo, title }: ProjectProps): JSX.Element => {
  // Add title and alt if photos do not have them
  if (!photo.responsiveImage.title) {
    photo.responsiveImage.title = title
    photo.responsiveImage.alt = title
  }

  const thumbImage = photo.responsiveImage

  return (
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
    </article>
  )
}

export default ProjectThumb
