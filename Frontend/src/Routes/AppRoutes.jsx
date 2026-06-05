import React from 'react'
import {  Routes,Route } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import Venu from '../Pages/Venu'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Booking from '../Pages/Booking'
import Dashboard from '../Layout/DashboardLayout'
import Dashboardadmin from '../admin/Dashboard'
import ManageMenu from '../admin/ManageMenu'
import AddMenu from '../admin/AddMenu'
const AppRoutes = () => {
  return (
    
        <Routes>
<Route element={<MainLayout/>}>
 <Route path='/' element={<Home/>}/>
      <Route path='/Menu' element={<Menu/>}/>
      <Route path='/Venue' element={<Venu/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Booking' element={<Booking/>}/>
</Route>
<Route element={<Dashboard/>}>
      <Route path='/admin/dashboard' element={<Dashboardadmin/>}/>
 <Route path='/admin/manage-menu' element={<ManageMenu />}/>
         <Route path='/admin/add-item' element={<AddMenu />}/>
</Route>
        </Routes>
    
    
  )
}

export default AppRoutes