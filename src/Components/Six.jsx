import React, { useEffect, useState } from 'react'

export default function Six() {

    const[data, setData] = useState(null);
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> response.json())
        .then((file)=> setData(file) )
    })
  return (
    <div>
      {
     
        data? (
          <div>
            <h1 className='bg-red-100 text-4xl' >Title: {data.title}</h1>
            <h3>body: {data.body}</h3>
          </div>
        ):(
          <p>Loading....</p>
        ) 
      }
    </div>
  )
}


