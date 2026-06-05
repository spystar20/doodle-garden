import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex p-4 bg-black'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Dashboard