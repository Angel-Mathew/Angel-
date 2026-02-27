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
      <button className="sphere" onClick={() => document.getElementById('events-section').scrollIntoView({ behavior:'smooth'})}>University Events</button>
      <button className="sphere" onClick={() => document.getElementById('personalworks-section').scrollIntoView({ behavior:'smooth'})}>Personal Works</button>
      <button className="sphere" onClick={() => document.getElementById('certificates-section').scrollIntoView({ behavior:'smooth'})}>Certificates</button>
    </div>

  
      
        <h2 className='title1'> University projects</h2>
      

  <section id= "projects-section" className="projects">
   
   
        
         <h2 className='subtitle'>TimeLapse video</h2>
         <p className='note'>to add background music used clideo.com video tool</p>
        <div className='card'>
         
         <video controls className="project-video"><source src= "public\assets\Universityprojects\time lapse sunset.mp4"/></video>
         
        </div>
          <h2 className='subtitle'>Bitsy game Finding Wifi</h2>
        <div className='card'>
        
         <video controls className="project-video"><source src= "public/assets/Universityprojects/Bitsy game Finding Wifi.mp4"/></video>
        </div>
          
        <h2 className='subtitle'>Application</h2>
        <div className='card'>
        <video controls className="project-video"><source src= "public/assets/Universityprojects/NaN calculator cocomix app.mp4"/></video>
        </div>
         <br/>
       <div className='card'>
        
         <video controls className="project-video"><source src= "public/assets/Universityprojects/walkthrough of multiple app (Diaries to Desire).mp4"/></video>
        </div>
       
        <h2 className='subtitle'>Websites</h2>
        <div className='card'>
        <video controls className="project-video"><source src= "public/assets/Universityprojects/Bakery Website.mp4"/></video>
        </div>
        <br/>
        <div className='card'>
        <video controls className="project-video"><source src= "public/assets/Universityprojects/Angel Sara Mathew walkthrough video.mp4"/></video>
        </div>
          
        <h2 className='subtitle'> For Yarah Consultants </h2>
        <h3 className='subtitle2' > Promo video</h3>
         <div className='card'>
        <video controls className="project-video"><source src= "public/assets/Universityprojects/Team 18 promo video of Yarah Consultants (group-work).mp4"/></video>
        </div>
         
      <h2 className='subtitle'>Data Visualization</h2>
        <div className='card'>
        <video controls className="project-video"><source src= "public/assets/Universityprojects/Angel Sara Mathew_Data Visualization.mp4"/></video>
        </div>
      </section>
      <section className="events">
        <h1 className='title2'> University Events</h1>
        <div id="events-section">
          <h2 className='subtitle'>Dubai Design week</h2>
          <div className='imgcard'>
          <img src="public/assets/Universityevents/Year1_Dubai-Design-week/Year1_Dubai Design week (3).png" alt="Dubai Design Week"/>
          <img src="public/assets/Universityevents/Year1_Dubai-Design-week/Year1_Dubai Design week (2).png" alt="Dubai Design Week"  />
          <img src="public/assets/Universityevents/Year1_Dubai-Design-week/Year1_Dubai Design week.png" alt="Dubai Design Week"  />
          </div>
           <h2 className='subtitle'>RAK Fine Art</h2>
          <div className='imgcard'>
          <img src="public/assets/Universityevents/Year1_RAk Fine Arts/RAK Fine Arts Festival (2).png" alt="RAK Fine Art"/>
          <img src="public/assets/Universityevents/Year1_RAk Fine Arts/RAK Fine Arts Festival (3).png" alt="RAK Fine Art"  />
          <img src="public/assets/Universityevents/Year1_RAk Fine Arts/RAK Fine Arts festival.png" alt="RAK Fine Art"  />
          </div>
           <h2 className='subtitle'>GDG </h2>
          <div className='imgcard'>
          <img src="public/assets/Universityevents/GDG_event/GDG event.jpeg" alt="GDG Event"/>
          </div>
          </div>
      </section>
      <section className="personalworks">
        <h1 className='title3'> Personal Works</h1>
        <h2 className='subtitle'>Stories</h2>
        <div id="personalworks-section">
          <div className="story-container">
            <img src="public/assets/coverpagebg/mlp.png" alt="Story" className='coverpage'/>
            <div className="story-content-overlay">
              <h3 className="story-title">Marvellous life of a parrot</h3>
             <a href="public/assets/Personalwork/Stories/Marvellous life of a parrot.pdf"
          target="_blank" rel="noopener noreferrer" className='pdf-link'>
            <div className='pdf-box'>
              <span>Read Story</span>
            </div>
          </a>
            </div>
          </div>
         {/*---End of story 1---*/}
        <div className="story-container">
           <img src="public/assets/coverpagebg/valiantgirl.png" alt="Story" className='coverpage'/>
            <div className="story-content-overlay">
              <h3 className="story-title2">The valiant girl</h3>
              <a href="public/assets/Personalwork/Stories/story_ valiant girl.pdf"
          target="_blank" rel="noopener noreferrer" className='pdf-link'>
            <div className='pdf-box'>
              <span>Read Story</span>
            </div>
          </a>
            </div>
          </div>
          {/*---End of story 2---*/}
          <div className="story-container">
            <img src="public/assets/coverpagebg/poppy.png" alt="Story" className='coverpage'/>
            <div className="story-content-overlay">
              <h3 className="story-title3">Poppy</h3>
              <a href="public/assets/Personalwork/Stories/Story_ Poppy.pdf"
          target="_blank" rel="noopener noreferrer" className='pdf-link'>
            <div className='pdf-box'>
              <span>Read Story</span>
            </div>
          </a>
            </div>
          </div>
            {/*---End of story 3---*/}
            <div className="story-container">
            <img src="public/assets/coverpagebg/gp.png" alt="Story" className='coverpage'/>
            <div className="story-content-overlay">
              <h3 className="story-title2"> Golden Pheasant</h3>
              <a href="public/assets/Personalwork/Stories/Story_golden pheasant.pdf"
          target="_blank" rel="noopener noreferrer" className='pdf-link'>
            <div className='pdf-box'>
              <span>Read Story</span>
            </div>
          </a>
            </div>
          </div>
            {/*---End of story 4---*/}
          
        </div>
        <br/>
      <div>
        <h2 className='subtitle'>Photography</h2>
        <div className='imgcard'>
          <img src="public/assets/Personalwork/Media/Photographs/IMG20250724164554_01.jpg" alt="Photography" />
          <img src="public/assets/Personalwork/Media/Photographs/IMG_20250805_190850_570.webp" alt="Photography"  />
          <img src="public/assets/Personalwork/Media/Photographs/IMG_20250827_111109_339.webp" alt="Photography" />
          <img src="public/assets/Personalwork/Media/Photographs/20240130_083544_mfnr.jpg" alt="Photography"/>
          <img src="public/assets/Personalwork/Media/Photographs/20240131_151023_mfnr.jpg" alt="Photography"  />
          
          
          </div>
          <h2 className='subtitle'>Videos</h2>
          <div className='card'>
            <h3 className='subtitle2'> Timelapse videos </h3>
          <video controls className="project-video"><source src= "public/assets/Personalwork/Media/Vidoes/city.mp4"/></video>
          <br/>
          <video controls className="project-video"><source src= "public/assets/Personalwork/Media/Vidoes/VID-20240120-WA0025.mp4"/></video>
            <h3 className='subtitle2'> Ocean </h3>
          <video controls className="project-video"><source src= "public/assets/Personalwork/Media/Vidoes/v.mp4"/></video>
            <h3 className='subtitle2'> Story videos </h3>
          <video controls className="project-video"><source src= "public/assets/Personalwork/Media/Vidoes/The Life turn.mp4"/></video>
          <br/>
          <video controls className="project-video"><source src= "public/assets/Personalwork/Media/Vidoes/Signal for Safety.mp4"/></video>
         </div>

      </div>
      <h2 className='subtitle'>Crafts</h2>
      <div className='craftcard'>
          <img src="public/assets/Personalwork/Crafts/20230731_094939_mfnr.jpg" alt="Crafts"/>
          <img src="public/assets/Personalwork/Crafts/image.png" alt="Crafts" />
          <img src="public/assets/Personalwork/Crafts/IMG20251109193557.jpg" alt="Crafts" />
          <img src="public/assets/Personalwork/Crafts/IMG20251109194031.jpg" alt="Crafts" />
          </div>
      </section>
<section className="certificates">
        <h1 className='title4'> Certificates</h1>
        <div id="certificates-section" className='imgcard'>
         <img src="public/assets/Certificates/Certificate.jpg" alt="Certificate"/>
         <img src="public/assets/Certificates/Introduction to HTML .png" alt="Certificate"/>
         <img src="public/assets/Certificates/Introduction to JavaScript.png" alt="Certificate"/>
         <img src="public/assets/Certificates/Introduction to python.png" alt="Certificate"/>
         <img src="public/assets/Certificates/Python Intermediate.png" alt="Certificate"/>
         <img src="public/assets/Certificates/python Tkinter .png" alt="Certificate"/>
         <img src="public/assets/Certificates/Screenshot 2026-01-15 190428.png" alt="Certificate"/>
         <img src="public/assets/Certificates/Storytelling for leaders.png" alt="Certificate"/>
         </div>
</section>

  </main>
   
  );
}
export default  Onepg;