import React from 'react'
import { CardShowcase } from './CardShowcase'
import './Showcase.css'
import { motion } from 'framer-motion'


const Showcase = () => {
  return (
    <section id="showcase" className="py-16 bg-background" aria-labelledby="showcase-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
  <div className="container mx-auto px-4 ">
    <header className="text-center mb-12">
      <h2 id="showcase-title" className="text-[2rem] font-bold text-secondary">What's in my ToolKit</h2>
      <p className="text-[1.2rem] font-semibold mt-2 text-secondary/80">Everything needed to build great products on the web.</p>
    </header>
    <CardShowcase />
  </div>
  </motion.div>
</section>
  )
}

export default Showcase