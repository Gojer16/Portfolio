import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
        <div className='h-screen bg-fuchsia-200 py-24 translate-y-4 transition-all duration-500'>
            <div className='container mx-auto px-4'> 
                <div className='grid grid-cols-2 gap-16 items-center'>
                    <div> 
                      <h2 className='text-4xl font-bold mb-6'>About Me</h2>
                      <p className='text-xl mb-6'>I'm a Full-Stack Developer who builds like an underdog with something to prove. I specialize in clean, responsive, and scalable apps — built with care, tested with discipline, and deployed with intention.</p>
                      <p className='mb-6'> I didn't get here by luck or inheritance — I got here by breaking things, fixing them, and learning obsessively. Every bug taught me something. Every project raised my standard. My goal isn’t just to write code — it’s to solve problems that matter.</p>
                      <p className='mb-6'>Outside of code, I’m always pushing limits: reading books, studying strategy (chess, business, life), and refining the systems that help me grow daily. I'm all-in on becoming exceptional, and I’m looking to work with teams who value effort, clarity, and long-term thinking.</p>
                      <div className='flex flex-row gap-4'>
                        <a  
                        rel='noopener noreferrer'
                        target='_blank'
                        className='px-8 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-500 active:bg-red-400 hover:scale-110 active:scale-90 transform hover:shadow-red-300/90 text-center'
                        href='https://www.linkedin.com/in/orlando-ascanio-52527b2a8/
                        '>Contact Me</a>
                        <a href="General-resume.pdf"
                        download
                        className='px-8 py-3 bg-purple-300 rounded-lg shadow hover:bg-purple-400 transition duration-300'>Download Resume
                        </a>
                        <a
                          href="https://paypal.me/orlandodev" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-yellow-300 text-black rounded-lg shadow hover:bg-yellow-400 transition hover:scale-105"
                          >🍪 Buy Me Cookies
                        </a>
                        
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>💻 Projects Built: <strong>12+</strong></div>
                        <div>📖 Books Read This Year: <strong>14</strong></div>
                        <div>🚀 Commit Streak: <strong>47 days</strong></div>
                        <div>🏋️‍♂️ Daily Habits: <strong>Reading, Coding, Chess</strong></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className='w-72 h-72 mx-auto animate-morph bg-gradient-to-br from-cyan-200 via-emerald-400 to-orange-500 rounded-full relative overflow-hidden'>
                          <div className=' absolute inset-0 bg-gradient-to-br from-cyan-300/50 via-cyan-400/50 to-fuchsia-500/50 rounded-full blur-2xl  animate-morph'> </div>
                          <img src='/me.jpg' alt='Orlando Ascanio portrait' className='absolute inset-0 w-full h-full object-cover z-10'/>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
 )
}

export default About