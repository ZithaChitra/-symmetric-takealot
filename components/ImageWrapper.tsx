import React from 'react'
import Image from 'next/image'


interface Props{
    src: string;
    alt?: string;
    width?: string;
    height?: string
}


const ImageWrapper: React.FC<Props> = ({src ,alt, width, height}) => {

  return (
    <div className={`relative ${width ?? 'h-6'} ${height ?? 'w-6'}`}>
      <Image src={src} alt={`${alt ?? '' }`} layout='fill'/>
    </div>
  )
}

export default ImageWrapper