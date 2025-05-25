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
        <div className='bg-gray-200 py-16  '>
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-between  items-center mb-8"> 
                    <div className='flex items-center mb-0'>
                        <span className='text-xl font-extrabold'>OAs</span>
                        <span className='text-purple-300 text-2lx ml-1'>@</span>
                    </div>
                    <ul className='flex flex-wrap justify-center gap-6 mb-0'>
                        <li>
                            <a href="#features" className='text-gray-400 hover:text-purple-300 transition-colors'>Showcase</a>
                        </li>

                        <li>
                            <a href="#about" className='text-gray-400 hover:text-purple-300 transition-colors'>About</a>
                        </li>

                        <li>
                            <a href="#skills" className='text-gray-400 hover:text-purple-300 transition-colors'>Skills</a>
                        </li>

                        <li>
                            <a href="#projects" className='text-gray-400 hover:text-purple-300 transition-colors'>Projects</a>
                        </li>

                        <li>
                            <a href="#contact" className='text-gray-400 hover:text-purple-300 transition-colors'>Contact</a>
                        </li>
                        <li>
                            <a href="#" className='text-gray-400 hover:text-purple-300 transition-colors'>Home</a>
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                            <GrGithub />
                        </a>

                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                           <FaLinkedin />
                        </a>

                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                            <FaDiscord />
                        </a>

                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                            <FaXTwitter />
                        </a>

                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                            <BsInstagram />
                        </a>

                        <a href="#" className='text-gray-600 hover:text-purple-300 transition-colors'>
                            <FaCcPaypal />
                        </a>
                    </div>
                   
                </div>
                 <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm gap-2">
                    <p className="text-gray-400">Open for freelance projects and collaborations 💼</p>
                    <p>&copy; 2025 Orlando Portfolio. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer