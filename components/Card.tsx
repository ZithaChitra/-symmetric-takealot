import React from 'react'

const Card:React.FC<any> = ({children}) => {
  return (
    <div className='drop-shadow-md bg-white'>
        {children}
    </div>
  )
}

export default Card
