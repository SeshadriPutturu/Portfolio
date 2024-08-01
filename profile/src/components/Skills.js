import React from 'react';
import './Skills.css';

const skills = [
  'Java',
  'Spring Boot',
  'Git',
  'SQL',
  'Rabbitmq',
  'Jenkins',
  'ReactJS'
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;