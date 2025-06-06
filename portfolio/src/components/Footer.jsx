import React from 'react';
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer role="contentinfo" className='bg-primary py-16 footer-section'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center gap-6 mb-8">
          <div className='flex items-center'>
            <span className='text-xl text-secondary font-extrabold' aria-label="Orlando Ascanio">Orlando Ascanio</span>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className='text-[1.1rem] flex flex-wrap justify-center gap-6'>
              <li><a href="#showcase" className='text-secondary hover:text-accent transition-colors' role="link">Showcase</a></li>
              <li><a href="#about" className='text-secondary hover:text-accent transition-colors' role="link">About</a></li>
              <li><a href="#skills" className='text-secondary hover:text-accent transition-colors' role="link">Skills</a></li>
              <li><a href="#projects" className='text-secondary hover:text-accent transition-colors' role="link">Projects</a></li>
              <li><a href="#contact" className='text-secondary hover:text-accent transition-colors' role="link">Contact</a></li>
              <li><a href="#" className='text-secondary hover:text-accent transition-colors' role="link">Home</a></li>
            </ul>
          </nav>

          <div className="flex gap-4 text-[1.2rem]" aria-label="Social Links">
            <a href="https://github.com/Gojer16" title="GitHub" aria-label="GitHub Profile" rel="noopener noreferrer" className='text-secondary hover:text-accent transition-colors'><GrGithub /></a>
            <a href="https://www.linkedin.com/in/orlando-ascanio-52527b2a8/" title="LinkedIn" aria-label="LinkedIn Profile" rel="noopener noreferrer" className='text-secondary hover:text-accent transition-colors'><FaLinkedin /></a>
            <a href="https://x.com/Gojer27" title="Twitter" aria-label="Twitter Profile" rel="noopener noreferrer" className='text-secondary hover:text-accent transition-colors'><FaXTwitter /></a>
            <a href="https://www.instagram.com/lilgojer/" title="Instagram" aria-label="Instagram Profile" rel="noopener noreferrer" className='text-secondary hover:text-accent transition-colors'><BsInstagram /></a>
            <a href="https://www.paypal.com/paypalme/orlandodev" title="Support via PayPal" aria-label="PayPal" rel="noopener noreferrer" className='text-secondary hover:text-accent transition-colors'><FaCcPaypal /></a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm gap-2 text-center">
          <p className="text-secondary">Open for freelance projects and collaborations 💼</p>
          <p className="text-secondary">&copy; 2025 Orlando Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
