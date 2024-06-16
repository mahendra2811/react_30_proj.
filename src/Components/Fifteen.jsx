import React, { useState } from 'react'
//this is my search bar filter list based on the user input 
export default function Fifteen(items) {

    const[searchTerm , setSearchTerm] = useState('');

    const filteredItems = items.filter((e)=> e.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div>
      <h1>search filter box </h1>
      
      <input type="text" placeholder='search....' onChange={(e)=> setSearchTerm(e.target.value )} />
      <ul>
        {filteredItems.map((item ,index) => (
            <li key={index} >
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}
