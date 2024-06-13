import React from 'react'
import { BrowserRouter, Route, Routes , Outlet , Link } from 'react-router-dom'
import Contact from '../../react_router/Contact'
import Home from '../../react_router/Home'
import About from '../../react_router/About'
import error from '../../react_router/error'


function Ten() {
  return (
    <div>
      
      <BrowserRouter>

      <nav>
        <ul>
          <li>
            <Link to='/' >Home </Link>
          </li>
          <li>
            <Link to='/about' >About </Link>
          </li>
          <li>
            <Link to='*' >This is 404 error page </Link>
          </li>
          <li>
            <Link to='/contact' >Contact </Link> <br /><br /><br />
          </li>
        </ul>
      </nav>

        <Routes>
          <Route  path='/' element={<Home/> }  ></Route>
          <Route  path='/contact' element={<Contact/> }  ></Route>
          <Route  path='/about' element={<About/> }  ></Route>
          <Route  path='*' element={ <error/> }  ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Ten
