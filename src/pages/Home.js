import React from 'react'
import '../styles/Home.css'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
          <h2>Hello,<strong> Iam Nandan Gonchikar</strong></h2>
          <div className='about-prompt'>
              <p>Iam a Graduate student in Computer Science at University of Texas at Dallas.</p>   
              <LinkedInIcon />
              <EmailIcon />
              <GithubIcon />
          </div>   
      </div>
      <div className='skills'>
          <h1> Skills</h1>
          <ol className='list'>
            <li className='item'>
                <h3> Programming Languages</h3>
                <span>  C, Python, Java, C++, M-Scripting, JavaScript</span>
            </li>
            <li className='item'>
              <h3> Tools and Technologies</h3>
              <span> MATLAB, Simulink, PL/SQL, Hadoop, Spark, Hive, Elasticsearch, Kibana, VBA, Docker, GIT, Linux </span>
            </li>
            <li className='item'>
              <h3> Web technologies</h3>
              <span className='skills-web'>HTML,CSS, React, NodeJS, Bootstrap</span>
            </li>
          </ol>
      </div>

      {/* <div className='skills'>
         <h2>I have experience with these technologies</h2>
         <div className='skillsGrid'>
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" title="React"/>
         </div> 
      </div> */}

    </div>
  )
}

export default Home

