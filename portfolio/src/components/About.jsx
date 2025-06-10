import React from 'react'
import "./About.css"
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section
      id="about"
      aria-label="About Orlando Ascanio"
      className="py-24 translate-y-4 transition-all duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-secondary text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-secondary text-xl mb-6">
              I'm a Full-Stack Developer who builds like an underdog with
              something to prove. I specialize in clean, responsive, and
              scalable apps — built with care, tested with discipline, and
              deployed with intention.
            </p>
            <p className="text-secondary mb-6">
              I didn't get here by luck or inheritance — I got here by breaking
              things, fixing them, and learning obsessively. Every bug taught me
              something. Every project raised my standard. My goal isn’t just to
              write code — it’s to solve problems that matter.
            </p>
            <p className="text-secondary mb-6">
              Outside of code, I’m always pushing limits: reading books,
              studying strategy (chess, business, life), and refining the systems
              that help me grow daily. I'm all-in on becoming exceptional, and I’m
              looking to work with teams who value effort, clarity, and long-term
              thinking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/orlando-ascanio-52527b2a8/"
                className="px-8 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary transition-all duration-500 active:bg-primary/50 hover:scale-110 active:scale-90 transform hover:shadow-primary/90 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                role="button"
                aria-label="Contact me on LinkedIn"
              >
                Contact Me
              </a>

              <a
                href="/General-resume.pdf"
                download
                className="px-8 py-3 bg-secondary text-black rounded-lg shadow-lg hover:bg-dark-secondary transition-all duration-500 hover:scale-110 active:scale-90 transform hover:shadow-dark-secondary/90 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                role="button"
                aria-label="Download resume"
              >
                Download Resume
              </a>

              <a
                href="https://paypal.me/orlandodev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-accent text-black rounded-lg shadow-lg transition-all duration-500 hover:scale-110 active:scale-90 transform hover:shadow-[#50c878]/90 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                role="button"
                aria-label="Buy me cookies"
              >
                🍪 Buy Me Cookies
              </a>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-secondary">
              <div>💻 Projects Built: <strong>16 Total (4 Completed)</strong></div>
              <div>📖 Books Read This Year: <strong>16</strong></div>
              <div>🚀 Commit Streak: <strong>33 days</strong></div>
              <div>🏋️‍♂️ Daily Habits: <strong>Reading, Coding, Chess</strong></div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative mx-auto w-fit">
            <div
              className="w-72 h-72 animate-morph bg-gradient-to-br from-cyan-200 via-emerald-400 to-orange-500 rounded-full relative overflow-hidden"
              role="img"
              aria-label="Portrait of Orlando Ascanio"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/50 via-cyan-400/50 to-fuchsia-500/50 rounded-full blur-2xl animate-morph"></div>
              <img
                src="/me.jpg"
                alt="Orlando Ascanio smiling"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
