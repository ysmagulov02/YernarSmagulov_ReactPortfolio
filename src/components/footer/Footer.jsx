import React from 'react'
import './footer.css'
import {FaLinkedinIn} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>YERNARS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://linkedin.com"><FaLinkedinIn/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YERNARS. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer