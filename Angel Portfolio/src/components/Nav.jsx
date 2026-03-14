import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        {/*---------------- Logo -----------*/ }
          <div className="logo-box">
        <img src="./A.png" alt="A" className="logo" />
         </div>
        
      </div>
       {/*---------------- Nav links -----------*/ }
      <ul className="navbar-links">
        <li>
          <Link to="/" onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior:'smooth'})}>University Projects</Link>
        </li>
        <li>
          <Link to="/" onClick={() => document.getElementById('events-section').scrollIntoView({ behavior:'smooth'})}>University Events</Link>
        </li>
        <li>
          <Link to="/" onClick={() => document.getElementById('personalworks-section').scrollIntoView({ behavior:'smooth'})}>Personal works</Link>
        </li>
         <li>
          <Link to="/" onClick={() => document.getElementById('certificates-section').scrollIntoView({ behavior:'smooth'})}>Certificates</Link>
        </li>
      </ul>
     
       
       
    </nav>
    
  );
};

export default Nav;