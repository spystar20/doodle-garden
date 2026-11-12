import React, { useContext } from 'react'
import AuthContext, { Authorized } from '../AuthContext/AuthContext'
import Loader from '../utils/Loader'
import { Navigate, Outlet, replace, useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
  const {user,authLoading}=useContext(Authorized)
  const location = useLocation()
  if(authLoading) return <Loader/>
  if(!user){
<Navigate to='/login' state={{from:location}} replace/>
  }
  return <Outlet/>
}

export default ProtectedRoutes