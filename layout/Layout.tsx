import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'


const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className='w-full'>
      <Navbar />
      <div className='max-w-2xl mx-auto px-3 lg:max-w-7xl lg:px-8'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout