import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <div className='w-full min-h-screen'>
        <Outlet/>
    </div>
  )
}

export default AuthenticationLayout