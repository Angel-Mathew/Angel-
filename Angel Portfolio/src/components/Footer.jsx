import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => { 
    return (
     
    <footer className='footer-container'>
        <h3 className='footer-title'> Contact Me</h3>
        <nav className='footer-nav'>
            <a href="https://www.linkedin.com/in/angel-sara-mathew-518321336/" target="_blank" rel="noopener noreferrer">LinkedIn</a>|
            <a href="https://www.youtube.com/@angelsaramathew2926" target="_blank" rel="noopener noreferrer">Youtube</a>|
            <a href="mailto:angelsaramathew2004@gmail.com">Email</a>|
            <a href ="https://wa.me/+971581981921" target="_blank" rel="noreferrer">Phone no:</a>|
            <a href="public/assets/CV/Angel Sara Mathew_CV .docx" target="_blank" rel="noopener noreferrer">My CV</a>
        </nav>
      
    </footer>
          
    );
};


export default Footer;
