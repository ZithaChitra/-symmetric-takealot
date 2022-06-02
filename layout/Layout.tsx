import React from 'react'

import Navbar from './Navbar'
import HeroeSearch from './HeroeSearch'
import Footer from './Footer'
import HeroeSection from '../components/HeroeSection'


const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className='w-full'>
      <Navbar />
      <HeroeSection />
      <div className='mx-auto px-3 lg:max-w-7xl lg:px-8'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
