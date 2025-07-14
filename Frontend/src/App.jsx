import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import Menu from './Pages/Menu'
import Home from '../src/Pages/Home'
import Venu from './Pages/Venu'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Booking from './Pages/Booking'
const App = () => {
  return (
    <BrowserRouter>
    <div ><Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Venue' element={<Venu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Booking' element={<Booking/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App