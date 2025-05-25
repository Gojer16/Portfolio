import React from 'react'
import Button from './Button'
import MacOs from './MacOs'
import { anticipate, easeIn, easeInOut, motion } from 'framer-motion';


const Hero = () => {
  return (
    <>
        <div className=' h-screen min-h-screen px-4 py-8 '>
          <div className='flex justify-center py-12 text-center '>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2}}

              >
              <h1 className="text-[3.5rem] font-bold text-white leading-tight">
              Full-Stack Developer <br />
              <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Engineering Solutions with Purpose
              </span>
              </h1>
              </motion.div>
            

          </div>

            <div className='flex justify-center text-center px-80'>
              <p className='text-[1.5rem] font-light text-white mt-6 max-w-3xl mx-auto'>
                I design and build robust, scalable applications that solve real problems — blending <span className="text-yellow-300 font-medium">innovation</span>, <span className="text-emerald-300 font-medium">clarity</span>, and <span className="text-cyan-400 font-medium">collaboration</span> to move ideas forward and create lasting impact.
              </p>
            </div>

            <div className='flex justify-center gap-4 mt-10 flex-wrap'>
                <Button 
                color='#50c878'
                title="Explore My Work" 
                icon="🚀"
                href = "#projects"
     
                />
                <Button 
                title="Let’s Collaborate" 
                variant="secondary" 
                icon="🤝"
                href = "#contact"
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