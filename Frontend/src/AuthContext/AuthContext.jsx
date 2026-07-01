import React, { useContext } from 'react'
import { useState } from 'react'
import {api} from '../../axios/api'
import { useEffect } from 'react'
import { createContext } from 'react'
 export const Authorized = createContext(null)

const AuthContext = ({children}) => {
  const [user ,setUser] = useState(null)
    const fetchAuth = async()=>{
        try{
const res = await api.get('/auth/me')
setUser(res?.data?.existingUser)
console.log(res)
        }catch(Err){
            console.log(Err)
        }
    }
    useEffect(()=>{
        fetchAuth()
    },[])
  return (
<Authorized.Provider value={{user,setUser}} >
    {children}
</Authorized.Provider>  )
}

export default AuthContext