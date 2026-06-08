import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import { Toaster } from 'sonner'
import AppRoutes from './Routes/AppRoutes'
const App = () => {
  return (
    <BrowserRouter>

    <Toaster/>
   <AppRoutes/>
    </BrowserRouter>
  )
}

export default App