import React from 'react'
import ProjectItem from '../components/ProjectItem';
import projectData from '../helpers/projectData'
import '../styles/Project1.css'

function Projects() {
  var projectsElement= projectData.map((oneProjectData,index) => {
                        return <ProjectItem name={oneProjectData.name}
                                            image={oneProjectData.image}
                                            description={oneProjectData.description} 
                                            technologiesUsed={oneProjectData.technologiesUsed}
                                            sourcecode={oneProjectData.sourcecode}
                                            Preview={oneProjectData.Preview}
                                            key={index}
                                            />
                      })


  return (
    <div className='projects'>
        <h1 className='section-title'> PROJECTS</h1>
          <div className='projectList'> 
              {projectsElement}
          </div>
    </div>
  )
}

export default Projects