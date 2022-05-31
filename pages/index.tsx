import React from 'react'
import { useState } from 'react'

import Product from '../components/Product'

import { ProductProps } from '../interfaces'


interface Props {
  products: ProductProps[]
}


const IndexPage: React.FC<Props> = ({ products }) => {
  

  return (
    <div className='mt-5'>
      <div className='flex justify-between mb-5'>
        <h2 className='text-base font-bold text-dark-gray'>Daily Deals From Local Businesses</h2>
        <span className='flex items-center justify-center w-24 h-8 border-solid border-2 border-dark-gray rounded-[16px] text-xs font-bold text-dark-gray cursor-pointer'>View More</span>
      </div>

      <div className='grid grid-cols-2 gap-2 lg:grid-cols-4'>
        { products.map(prod => {

          return(
            <Product key={prod.id}  {...prod} />
          )
        }) }
      </div>


    </div>
  )
}

export default IndexPage



export async function getServerSideProps() {

  let response = await fetch('https://fakestoreapi.com/products?limit=20')

  try{
    response = await response.json()
  }catch(err){
    console.log(response)
    
  }

  return {
    props: {
      products: response
    }
  }
}



