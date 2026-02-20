import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Onepg.css';
const Onepg = () => {
  return (
    <main className="container">
     
 <div className="about-section">
  <img src="/profile.jpg" alt="Profile Picture" className="profile" />
    < div className="text-container">
    <h1 className="heading">About</h1>
      
      <p className="about">
        Angel Sara Mathew 
Bsc Creative Computing graduate. Passionate about making videos and websites and designing, crafting, writing stories, and taking photos and videos.</p>
     
    </div>
      
    </div>
   
     
       <div className="buttons">
      <button className="sphere" onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior:'smooth'})}>University Projects</button>
      <button className="sphere">University Events</button>
      <button className="sphere">Personal Works</button>
      <button className="sphere">Certificates</button>
    </div>

  <div  className="label">
    <div className="line"></div>
    <div className="label_content">
      <div className="Sparkle"></div>
        <h2 className='title1'> University projects</h2>
      </div>
     <div className="line"></div>
  </div>

  <section id= "projects-section" className="projects">
    <div className='uniprojects'>
      <div className="individualprojects">
        <h3 className="title2">Individual Projects</h3>
         <h2 className='subtitle'>TimeLapse video</h2>
        <div className='card'>
         
         <video controls className="project-video"><source src= "public\assets\Universityprojects\time lapse sunset.mp4"/></video>
        </div>
          <h2 className='subtitle'>Bitsy game Finding Wifi</h2>
        <div className='card'>
        
         <video controls className="project-video"><source src= "public\assets\Universityprojects\Bitsy game Finding Wifi.mp4"/></video>
        </div>
        
        <h2 className='subtitle'>Application</h2>
        <div className='card'>
        <video controls className="project-video"><source src= "public\assets\Universityprojects\NaN calculator cocomix app.mp4"/></video>
        </div>
       <div className='card'>
        
         <video controls className="project-video"><source src= "public\assets\Universityprojects\walkthrough of multiple app (Diaries to Desire).mp4"/></video>
        </div>

      </div>
       
     

    </div>
  </section>
  </main>
   
  );
}
export default  Onepg;