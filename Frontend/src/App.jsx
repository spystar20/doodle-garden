import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'

import AppRoutes from './Routes/AppRoutes'
const App = () => {
  return (
    <BrowserRouter>
   <AppRoutes/>
    </BrowserRouter>
  )
}

export default App