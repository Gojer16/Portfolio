import React from 'react'
import { CardShowcase } from './CardShowcase'
import './Showcase.css'


const Showcase = () => {
  return (
    <div className='bg-[#e6e6fa] h-screen '>
      <div className='title text-red-400'>
        <h1 className='text-[2rem] font-bold'>What's in my ToolKit</h1>
        <p className='text-[1.2rem] font-semibold mt-2'>Everything needed to build great products on the web.</p>
      </div>
      <div className='px-4 mx-auto'>
          <CardShowcase />
      </div>
    </div>
  )
}

export default Showcase