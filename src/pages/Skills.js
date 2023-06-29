import React from 'react';
import js from '../assets/skills/javascript.png'
import HTML from '../assets/skills/HTML.png'
import CSS from '../assets/skills/CSS3.png'
import Reactimage from '../assets/skills/react.png'

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', image: js },
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'React', image: Reactimage },
    // Add more skills and corresponding images here
  ];

  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div className="skill-item" key={index}>
          <img src={skill.image} alt={skill.name} className="skill-image" />
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
