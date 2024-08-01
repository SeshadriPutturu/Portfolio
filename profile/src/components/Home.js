import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Seshadri Putturu, a backend developer passionate about creating efficient and scalable systems.</p>
        <Link to="/projects" className="btn">View My Projects</Link>
      </header>
    </div>
  );
};

export default Home;
