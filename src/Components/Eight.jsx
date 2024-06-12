import React ,  {useState} from 'react'

function Eight() {

    const[backgroundColor , setBackgroundColor ] = useState('blue');

    const handleClick = () => {
        const newColor = backgroundColor ==='blue' ? 'red' : 'green' ;
        setBackgroundColor(newColor);
    }
  return (
    <div>
        <h1 className='text-5xl' >Change Background Color</h1>
        <div   className='text-3xl cursor-pointer m-10 p-10' style={{backgroundColor}}  >   
                <button onClick={handleClick}  >hello click me  </button> <br /> Click me to change background color  
        </div>
    </div>
  )
}

export default Eight
