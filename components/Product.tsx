import React from 'react'


interface ProductProps{
    id: string | number,
    title: string,
    price: string | number,
    category: string,
    description: string,
    image: string,

}


const Product:React.FC<ProductProps> = ({id, title, price, category, description, image}) => {
  return (
    <div>Product</div>
  )
}


export default Product