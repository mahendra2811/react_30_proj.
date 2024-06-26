import React from 'react'

export default function Tweenty() {
    const products = [
    { id: 1, name: 'Product A ' },
    { id:2 , name : 'Product B '}
    { id:3 , name : 'Product C '}
    ]
  return (
    <div>
      <h2>Shoping Cart</h2>
      <h2>Product List </h2>
      <ul>
        {
            products.map(
        }
      </ul>
    </div>
  )
}
