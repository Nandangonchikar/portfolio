import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Project card 
function ProjectItem({image, name,description,technologiesUsed,sourcecode,Preview}) {
  
  var TechusedElement=technologiesUsed.map((tech)=>  {
               return (<li>{tech}</li>)
           })
  console.log(TechusedElement);
  return (
    
    <div className='projectItemCard'>
      <img src={image} alt={name} className='projectItemImage' />
      <div className='projectDetails'>
            <h3 className='projectName'>{name}</h3>
            <p className='projectDescription'>{description}</p>
            <ul className='projectTechnologies'>
                {/* <li>WorkIcon </li>
                <li>Matkan </li>
                <li>React </li> */}
                {TechusedElement}
            </ul>
            <ul className='projectLinks'>
                <li> 
                  <a href={sourcecode} title='Source code' aria-label='Source code' target='_blank' rel='noreferrer'>
                     <CodeIcon />
                  </a>
                </li>
                <li> 
                  <a href={Preview} title='Preview' aria-label='Preview' target='_blank' rel='noreferrer'> 
                    <OpenInNewIcon />
                  </a>
                </li>
            </ul>
      </div>
    </div>
   
  )
}

export default ProjectItem