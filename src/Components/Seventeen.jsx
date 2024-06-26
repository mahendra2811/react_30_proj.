import React, { useState } from 'react'

export default function Seventeen() {

    const [selectedColor  , setSelectedColor] = useState('#000000');

    const handlechange = (e) =>{
        setSelectedColor(e.target.value);
        
    }

  return (
    <div>
      <input type='color' onChange={handlechange}  />
        <div style={{width:'90vw' , height:'90vh' , backgroundColor: selectedColor} } >

        </div>
    </div>
  )
}
