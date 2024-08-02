import React from 'react'

export default function Tweenty() {

  const addToCart = (item) =>{

  }
    const products = [
    { id:1, name: 'Product A ' },
    { id:2, name: 'Product B ' },
    { id:3, name: 'Product C ' }
    ]
  return (
    <div>
      <h1>Shoping Cart</h1>
      <h2>Product List </h2>
      <ul>
        {
            products.map((product) =>(
                <li key={product.id} >
                  {product.name} <button onClick={()=>{
                    addToCart(product)
                  }} >Add to Cart</button>
                </li>

            ))
        }
      </ul>
    </div>
  )
}
