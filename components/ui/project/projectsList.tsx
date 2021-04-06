import type { Photo } from '@/lib/shared/types/photo'

import ProjectThumb from './projectThumb'
import PhotoThumb from './photoThumb'
import cloneDeep from 'lodash.clonedeep'
import Masonry from 'react-masonry-css'
import { Project } from '@/lib/queries/home/types'

interface ProjectsProps {
  photos?: Photo[]
  projects?: Project[]
  title?: string
}

const ProjectsList = ({ photos, projects, title }: ProjectsProps): JSX.Element => {
  const breakpointColumnsObj = {
    default: 3,
    767: 2,
    478: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="home-projects-grid"
      columnClassName="home-project"
    >
      {photos &&
        photos.map((readOnlyProject, index) => {
          const project = cloneDeep(readOnlyProject)
          return <PhotoThumb title={title} photo={project} key={index} />
        })}
      {projects &&
        projects.map((readOnlyProject, index) => {
          const project = cloneDeep(readOnlyProject)
          return <ProjectThumb project={project} key={index} />
        })}
    </Masonry>
  )
}

export default ProjectsList
