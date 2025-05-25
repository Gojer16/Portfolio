import React from 'react'
import Button from './Button'
import MacOs from './MacOs'
import { anticipate, easeIn, easeInOut, motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
        <div className=' bg-gradient-to-t from-[#e0b0ff] to-[rgb(200,162,200)] h-screen min-h-screen px-4 py-8 '>
          <div className='flex justify-center py-12 text-center '>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2}}

              >
              <h1 className="text-[3.5rem] font-bold text-white leading-tight">
              I'm a <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">Full-Stack Developer</span> 
              <br />Crafting Impactful Digital Solutions
              </h1>
              
            </motion.div>

          </div>
          <div className='flex justify-center text-center px-80'>
            <p className='text-[1.5rem] font-light text-white mt-6 max-w-3xl mx-auto'>
            I build thoughtful, efficient, and modern web applications that solve real-world problems — blending <span className="text-yellow-300 font-medium">innovation</span>, <span className="text-emerald-300 font-medium">simplicity</span>, and <span className="text-blue-300 font-medium">collaboration</span> to empower people and businesses.              </p>
          </div>
            <div className='flex justify-center gap-4 mt-10 flex-wrap'>
                <Button 
                color='#50c878'
                title="Explore My Work" 
                icon="🚀"

     
                />
                <Button 
                title="Let’s Collaborate" 
                variant="secondary" 
                icon="🤝"
                />
            </div>
            <div className='flex py-16 justify-center'> 
                    <MacOs />
                </div>

        </div>
    </>
  )
}

export default Hero