import React from 'react'
import Button from './Button'
import MacOs from './MacOs'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
        <section 
            className='min-h-screen px-4 py-12 flex flex-col justify-center'
            aria-label="Introduction to Software Engineer"
        >
          <div className='flex justify-center pb-6 md:pb-12 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2}}
              role="heading"
              aria-level="1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Software Engineer <br />
              <span 
                className="bg-gradient-to-r from-green-300 via-emerald-400 to-cyan-400 text-transparent bg-clip-text"
                aria-label="From API to UI — Building Scalable Web Products"
              >
              From API to UI — Building Scalable Web Products
              </span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3}}
          >
            <div className='flex justify-center text-center w-full px-2'>
              <p className='text-lg sm:text-xl md:text-2xl font-light text-white mt-4 md:mt-6 max-w-3xl mx-auto'>
                I design and build robust, scalable applications that solve real problems — blending <span className="text-yellow-300 font-medium">innovation</span>, <span className="text-emerald-300 font-medium">clarity</span>, and <span className="text-cyan-400 font-medium">collaboration</span> to move ideas forward and create lasting impact.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5}}
          >
            <div className='flex justify-center gap-4 mt-8 md:mt-10 flex-wrap'>
                <Button 
                  color='#50c878'
                  title="Explore My Work" 
                  icon="🚀"
                  href="#projects"
                  aria-label="View portfolio projects"
                />
                <Button 
                  title="Let's Collaborate" 
                  variant="secondary" 
                  icon="🤝"
                  href="#contact"
                  aria-label="Contact for collaboration"
                />
            </div>

            <div className='flex py-8 md:py-16 justify-center'> 
              <MacOs />
            </div>
          </motion.div>
        </section> 
    </>
  )
}

export default Hero