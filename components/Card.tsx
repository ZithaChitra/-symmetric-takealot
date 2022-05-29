import React from 'react'

const Card:React.FC<any> = ({children}) => {
  return (
    <div className='drop-shadow-md'>
        {children}
    </div>
  )
}

export default Card
