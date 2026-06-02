import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import Menu from './Pages/Menu'
import Home from '../src/Pages/Home'
import Venu from './Pages/Venu'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Booking from './Pages/Booking'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Otp from './Auth/Otp'
import VerifyEmail from './Auth/VerifyEmail'
import SendpassLink from './Auth/SendPassLink'
import VerifyPassword from './Auth/VerifyPassword'
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
      <Route path='/login' element={<Login/>}/>
            <Route path='/sign' element={<Signup/>}/>
            <Route path='/signup-verification' element={<Otp/>}/>
              <Route path='/verify-email' element={<VerifyEmail/>}/>
              <Route path='/reset-password' element={<SendpassLink/>}/>
              <Route path='/verify-password' element={<VerifyPassword/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App