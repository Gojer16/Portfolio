import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>    
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1 py-4">{children}</main>
      <Footer />
      </div>
    </>
  )
}

export default Layout
