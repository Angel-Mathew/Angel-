import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Onepg.css';
const Onepg = () => {
  return (
    <main className="container">
        <img src="src/design/flower.png" alt="Flower" className="flower" />
 <div className="about-section">
  <img src="/profile.jpg" alt="Profile Picture" className="profile" />
    < div className="text-container">
    <h1 className="heading">About</h1>
      
      <p className="about">
        Angel Sara Mathew 
Bsc Creative Computing graduate. Passionate about making videos and websites and designing, crafting, writing stories, and taking photos and videos.</p>
     
    </div>
      
    </div>
   
      <img src="src/design/petals.png" alt="Petals" className="petals" />
       <div className="buttons">
      <button className="sphere">University Projects</button>
      <button className="sphere">University Events</button>
      <button className="sphere">Personal Works</button>
      <button className="sphere">Certificates</button>
    </div>
  <div className="label">
    <div className="line"></div>
    <div className="label_content">
      <div className="Sparkle"></div>
        <h2 className='title1'> University projects</h2>
      </div>
     <div className="line"></div>
    

   </div>
  </main>
   
  );
}
export default  Onepg;