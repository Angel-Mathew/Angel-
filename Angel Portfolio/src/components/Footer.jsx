import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => { 
    return (
    
    <footer className='footer-container'>
        <img src="./A.png" alt="A" className="logoa" />
        <h3 className='footer-title'> Contact Me</h3>
        
        <nav className='footer-nav'>
            <a href="https://www.linkedin.com/in/angel-sara-mathew-518321336/" target="_blank" rel="noopener noreferrer" title="Click to visit My LinkedIn profile">LinkedIn</a> |
            <a href="https://www.youtube.com/@angelsaramathew2926" target="_blank" rel="noopener noreferrer"  title="Click to visit My Youtube channel">Youtube</a> |
             <a href="mailto:angelsaramathew2004@gmail.com"  title="email : angelsaramathew2004@gmail.com">Email</a> |
             <a href="https://wa.me/+971581981921" target="_blank" rel="noreferrer" title="phone no:+971581981921">WhatsApp</a> |
            <a href=".\assets\cv\angelsaramathew_cv.docx" target="_blank" rel="noopener noreferrer"  title="Download my CV">My CV</a>
        </nav>
      
    </footer>
    
          
    );
};


export default Footer;
