import type { Project } from '@/lib/queries/home/types'

import ProjectThumb from './projectThumb'
import cloneDeep from 'lodash.clonedeep'
import Masonry from 'react-masonry-css'

interface ProjectsProps {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsProps): JSX.Element => {
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
      {projects.map((readOnlyProject, index) => {
        const project = cloneDeep(readOnlyProject)

        return <ProjectThumb project={project} key={index} />
      })}
    </Masonry>
  )
}

export default ProjectsList
