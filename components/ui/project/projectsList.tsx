import ProjectThumb from './projectThumb'
import cloneDeep from 'lodash.clonedeep'

const ProjectsList = ({ projects }): JSX.Element => {
  return projects.map((readOnlyProject, index) => {
    const project = cloneDeep(readOnlyProject)

    return (
      // <h2 key={index}>{project.title}</h2>
      <ProjectThumb project={project} key={index} />
    )
  })
}

export default ProjectsList
