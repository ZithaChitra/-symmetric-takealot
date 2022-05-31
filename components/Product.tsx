import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import ImageWrapper from './ImageWrapper'
import Card from './Card'

import { ProductProps } from '../interfaces'



function cn(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}



const Product: React.FC<ProductProps> = ({ id, title, price, category, description, image }) => {

    const [isLoading, setLoading] = useState(true)


    return (

        <div className='group bg-white drop-shadow'>
            <div className='w-full flex justify-center'>
                <div className='aspect-w-1 aspect-h-1 w-[65%] h-[65%] overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                    <Image
                        alt={title}
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        className={cn(
                            'duration-700 ease-in-out group-hover:opacity-75',
                            isLoading
                                ? 'scale-110 blur-2xl grayscale'
                                : 'scale-100 blur-0 grayscale-0'
                        )}
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
            </div>
            <h4 className='text-dark-gray text-center text-sm'>{title}</h4>

            <div>
                <span>{price}</span>
            </div>
        </div>


    )
}


export default Product                                                                                                                                                          