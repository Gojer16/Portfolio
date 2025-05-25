import React from 'react'
import './CardShowcase.css'
import { AiFillDatabase } from "react-icons/ai";
import { PiPackage } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { VscFileCode } from "react-icons/vsc";

export const CardShowcase = () => {
  const cards = [
    {
      title: 'API Design & Integration',
      desc: 'I build robust REST APIs with clear structure, clean documentation, and secure integration practices — making backend services that developers actually enjoy working with.',
      icon: <VscFileCode />

    },
    {
      title: 'Database Architecture',
      desc: 'Skilled in structuring SQL and NoSQL databases for performance and clarity — I design schemas that scale and keep data relationships sane.',
      icon: <AiFillDatabase />
    },
    {
      title: 'DevOps & Deployment',
      desc: 'I integrate CI/CD pipelines and use Docker to containerize apps — ensuring reliable, repeatable deployments across environments.',
      icon: <PiPackage />
    },
    {
      title: 'Frontend UI/UX Craftsmanship',
      desc: 'While my core is backend, I love building clean interfaces with React and Nextjs — ensuring users not only get value but enjoy the experience.',
      icon: <CgWebsite />
    },
  ]

  return (
    <div className='card-grid'>
      {cards.map((card, index) => (
        <div key={index} className='card'>
          <div className='card-icon'>
            {card.icon}
          </div>
         
          <h3 className='text-xl font-semibold mb-2 text-black '>{card.title}</h3>
          <p className='text-gray-700 text-sm'>{card.desc}</p>
        </div>
      ))}
    </div>
  )
}
