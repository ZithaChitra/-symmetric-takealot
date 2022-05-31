import React from 'react'

import Navbar from './Navbar'


const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='max-w-2xl mx-auto px-3 lg:max-w-7xl lg:px-8'>
        {children}
      </div>
    </div>
  )
}

export default Layout