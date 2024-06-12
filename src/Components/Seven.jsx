import React, { useEffect, useState } from 'react'

function Seven() {
    const[time , setTime] = useState(10) ;


    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=> setTime(time-1) , 1000);
            return () =>clearTimeout(timer)
        }
    })
  return (
    <div>
      Time Left : {time} second 
    </div>
  )
}

export default Seven
