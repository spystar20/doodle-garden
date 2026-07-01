import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router'
import { Toaster } from 'sonner'
import AppRoutes from './Routes/AppRoutes'
import AuthContext from './AuthContext/AuthContext'
const App = () => {
  return (
    <AuthContext>
    <BrowserRouter>

    <Toaster/>
   <AppRoutes/>
    </BrowserRouter>
    </AuthContext>
  )
}

export default App