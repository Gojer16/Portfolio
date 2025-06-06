import React from 'react'
import { Link } from 'react-scroll'
import { HiMoon, HiSun } from "react-icons/hi2"
import { useTheme } from './useTheme'
import { motion } from 'framer-motion';



const navItems = [
  { name: 'Showcase', to: 'showcase' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

const Navbar = () => {
   const { theme, toggleTheme } = useTheme();


  return (
    <nav className="sticky top-0 z-50"  role="navigation" aria-label="Main navigation">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        >
      <div className='flex justify-between px-6 py-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-b-xl shadow-sm text-white font-semibold'>
        <Link to="hero" smooth={true} duration={500} offset={-70} className="cursor-pointer text-[1.2rem] tracking-wide">
          Orlando's Portfolio
        </Link>
        <ul className='flex gap-6 text-[1rem]'  role="menubar">
          {navItems.map(({ name, to }, i) => (
            <li key={i} role="none" className='relative group transition-all hover:text-accent hover:cursor-pointer hover:scale-105 active:scale-95'>
              <Link
              role="menuitem"
              aria-label={`Go to ${name}`}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-accent"
              >
                {name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>


       <button onClick={toggleTheme} className='text-[1.5rem] transition-all duration-300 transform hover:scale-110 hover:rotate-72 ease-in-out hover:text-yellow-300 focus:outline-none focus:ring-2 cursor-pointer focus:ring-accent/50 rounded'>
          {theme === 'dark' ? <HiSun /> : <HiMoon />}
        </button>
      </div>
      </motion.ul>
    </nav>
  )
}

export default Navbar
