import React from 'react'
import Image from 'next/image'

import ImageWrapper from './ImageWrapper'

import gaming from '../public/images/gaming.png'

const DepartmentSideModal = (props: any) => {
  return (
    <div className='flex h-full drop-shadow bg-light-gray-extra'>

      <div className='w-[200px] min-h-[430px] bg-light-gray-extra'>
        col 1
      </div>

      <div className='w-[200px] bg-white'>
        Col 2
      </div >

      <div className='w-[200px] bg-gray-500'>

        <div className='relative w-full h-full'>
          <Image src={gaming} layout='fill' />
        </div>

      </div>
    </div>
  )
}

export default DepartmentSideModal  