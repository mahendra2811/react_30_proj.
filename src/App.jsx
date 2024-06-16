import { useEffect, useState } from 'react'
import react  from 'react'
import './App.css'
// import Four from './Components/Four.jsx'
// import Five from './Components/Five.jsx'
// import Six from './Components/Six.jsx'
// import Seven from './Components/Seven.jsx'
// import Eight from './Components/Eight.jsx'
// import Ten from './Components/Ten.jsx'
// import Eleven from './Components/Eleven.jsx'
// import Tweleve from './Components/Tweleve.jsx'
// import Thirteen from './Components/Thirteen.jsx'
// import Fourteen from './Components/Fourteen.jsx' 
import Fifteen from './Components/Fifteen.jsx'



function App() {


  const [items , setItems] = useState(['items1' , 'items2' , 'items3' , 'items4', 'BIg' , 'small' ]);
  return (
     <>
      {/* <Four/> */}
      {/* <Five/> */}
      {/* <Six/> */}
      {/* <Seven/> */}
      {/* <Eight/> */}
      {/* <Ten/>  */}
      {/* <Eleven/> */}
      {/* <Tweleve/> */}
      {/* <Thirteen/> */}
      {/* <Fourteen/> */}
      <Fifteen items={items} />
     </>
  )
}

export default App
