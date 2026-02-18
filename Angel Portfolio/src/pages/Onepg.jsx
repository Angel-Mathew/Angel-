import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Onepg.css';
const Onepg = () => {
  return (
    <main className='container'>
        <img src="src/design/flower.png" alt="Flower" className="flower" />
 <div className="about-section">
  <img src="/profile.jpg" alt="Profile Picture" className="profile" />
    < div className="text-container">
    <h1 className='heading'>About</h1>
      
      <p className='about'>
        Angel Sara Mathew 
Bsc Creative Computing graduate. Passionate about making videos and websites and designing, crafting, writing stories, and taking photos and videos.</p>
     
    </div>
      
    </div>
   
      <img src="src/design/petals.png" alt="Petals" className="petals" />
       <div className='buttons'>
      <button className='University_projects '>University Projects</button>
      <button className='University_events'>University Events</button>
      <button className='Personal_works'>Personal Works</button>
      <button className='Certificates'>Certificates</button>
    </div>
  </main>
   
  );
}
export default  Onepg;