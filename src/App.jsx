
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
// import Fifteen from './Components/Fifteen.jsx'
// import Sixteen from './Components/Sixteen.jsx';
// import Seventeen from './Components/Seventeen.jsx';
// import Nineteen from './Components/Nineteen';
// import ThemeProvider from './Components/ThemeContext';
import Tweenty from './Components/Tweenty';
import { CartProvider } from './CartContext';



function App() {


  // const items  =['items1' , 'items2' , 'items3' , 'items4', 'BIg' , 'Anoter Item ', 'Another Item 2 ' ,'small' ];
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
      {/* <Fifteen items={items} /> */}
      {/* <Sixteen items={items} itemsPerPage = {2} />  */}
      {/* <Seventeen/> */}
      {/* <ThemeProvider> */}
        {/* <Nineteen/> */}
      {/* </ThemeProvider> */}
      <CartProvider>
      <Tweenty/>
      </CartProvider>
      
     </>
  )
}

export default App
