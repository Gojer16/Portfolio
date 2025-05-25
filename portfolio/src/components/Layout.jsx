import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>    
    <div className="scheme-dark bg-gradient-to-t from-[#e0b0ff] to-[rgb(200,162,200)] dark:bg-gradient-to-bl dark:from-blue-100 dark:to-emerald-500 min-h-screen text-white flex flex-col">
      <Navbar />
      <main className="flex-1 py-4">{children}</main>
      <Footer />
      </div>
    </>
  )
}

export default Layout
