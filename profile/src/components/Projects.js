import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1.',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2.',
    link: 'https://github.com/yourusername/project2',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
