import React from 'react'
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
        <div className='bg-primary py-16  footer-section'>
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-between  items-center mb-8"> 
                    <div className='flex items-center mb-0'>
                        <span className='text-xl text-secondary font-extrabold'>Orlando Ascanio</span>
                    </div>
                    <ul className='text-[1.1rem] flex flex-wrap justify-center gap-6 mb-0'>
                        <li>
                            <a href="#features" className='text-secondary hover:text-accent transition-colors'>Showcase</a>
                        </li>

                        <li>
                            <a href="#about" className='text-secondary hover:text-accent transition-colors'>About</a>
                        </li>

                        <li>
                            <a href="#skills" className='text-secondary hover:text-accent transition-colors'>Skills</a>
                        </li>

                        <li>
                            <a href="#projects" className='text-secondary hover:text-accent transition-colors'>Projects</a>
                        </li>

                        <li>
                            <a href="#contact" className='text-secondary hover:text-accent transition-colors'>Contact</a>
                        </li>
                        <li>
                            <a href="#" className='text-secondary hover:text-accent transition-colors'>Home</a>
                        </li>
                    </ul>
                    <div className="flex text-[1.2rem] gap-4">
                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                            <GrGithub />
                        </a>

                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                           <FaLinkedin />
                        </a>

                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                            <FaDiscord />
                        </a>

                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                            <FaXTwitter />
                        </a>

                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                            <BsInstagram />
                        </a>

                        <a href="#" className='text-secondary hover:text-accent transition-colors'>
                            <FaCcPaypal />
                        </a>
                    </div>
                   
                </div>
                 <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm gap-2">
                    <p className="text-secondary">Open for freelance projects and collaborations 💼</p>
                    <p className="text-secondary">&copy; 2025 Orlando Portfolio. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer