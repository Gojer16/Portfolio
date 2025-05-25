import React from 'react'
import { Link } from 'react-scroll'
import { HiMoon, HiSun } from "react-icons/hi2"
import { useTheme } from './useTheme' // adjust path based on your structure


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
    <div className="sticky top-0 z-50">
      <div className='flex justify-between px-6 py-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-b-xl shadow-sm text-white font-semibold'>
        <h2 className="text-[1.2rem] tracking-wide">Orlando's Portfolio</h2>
        <ul className='flex gap-6 text-[1rem]'>
          {navItems.map(({ name, to }, i) => (
            <li key={i} className='relative group transition-all hover:text-cyan-300 hover:cursor-pointer hover:scale-105 active:scale-95'>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
              >
                {name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>


       <button onClick={toggleTheme} className='text-[1.5rem] hover:text-yellow-300 transition-all duration-300 transform hover:rotate-12 cursor-pointer'>
          {theme === 'dark' ? <HiSun /> : <HiMoon />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
