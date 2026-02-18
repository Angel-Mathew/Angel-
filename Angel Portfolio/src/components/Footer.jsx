import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => { 
    return (
     
    <footer>
        <img src ="/icon.png" alt="Icon" className="icon" />
        <div className="footer-content">
            <a href="https://www.youtube.com/@angelsaramathew2926" target="_blank" rel="noopener noreferrer" style={{color:"black"}}>Youtube</a> |
        </div>
    </footer>
          
    );
};

export default Footer;
