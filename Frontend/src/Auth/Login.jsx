import React from 'react'
import auth from '../assets/auth.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import authstore from '../AuthStore/user'
import { useState } from 'react'

const Login = () => {
  
    const [email,setEmail]= useState("")
        const [password,setPassword]= useState("")
        const navigate= useNavigate()
        // const {login}= authstore
        const handleSubmit = async (e)=>{
          e.preventDefault()
          try{
const res = await axios.post('http://localhost:3000/auth/login',{email,password},{withCredentials:true},
)
  console.log(res.data),
 setTimeout(() => {
  navigate('/')
 }, 1000);
 alert("user created ")
          }catch(err){
            console.log(err,'error occured')
          }
        }
  return (
    <div className='w-full h-[100vh] bg-[#fffff0]'>
          <div className='flex items-center'>
              <div className='w-[35%] bg-black h-[100vh] flex items-center'><div className='w-[6%]'><h1 className='text-[#fffff0] relative top-11 text-[8rem] font-black uppercase'>Fresh. Fun. Flavor.</h1></div></div>
  <div className='absolute'><img className='relative w-[30rem] left-[18rem]  spin '       src={auth} alt="" /></div>
  
  <div className='flex flex-col gap-10 justify-center items-center absolute  right-10 top-36'>
      <div className='flex flex-col gap-3 items-center justify-center text-black'>
      <h2 className='md:text-5xl capitalize text-4xl font-semibold font-[Imperial_Script]'>Welcome Back to Doodle Garden</h2>
      <p className='font-outfit w-[50vw] text-center text-xs md:px-32 md:text-lg text-semibold'>Good to see you again! Log in to continue your orders, track deliveries, and enjoy your favourites.</p>
      </div>
   <div className='flex flex-col w-[100%] lg:w-[70%]  md:w-[85%] gap-12 justify-start p-10 rounded-xl border-2'>
      <form action="" onSubmit={handleSubmit} className='flex-col flex gap-8'>
 

          <input type="email" className='border-b-[0.1rem] pb-1  text-black capitalize placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Email Address' value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" />
            <input type="password" className='border-b-[0.1rem] pb-1  text-black capitalize placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  name="password" id="password" />
                  <div className='flex py-3 justify-center items-center w-full '>
                  <button className=' flex border-black border  w-full bg-black py-2 md:py-3 px-2  text-xl uppercase font-antonio cursor-pointer text-white scale-100 hover:scale-95 items-center justify-center rounded-xl' >
                    <input type='submit' placeholder='Sign up' />
                  </button>
                </div>
      </form>
   </div>
   <p className=' text-black text-s '>Don’t have an account? <Link to='/sign'
   ><span className=' underline hover:underline-offset-0'>Create one</span></Link></p>
   
          </div>
          </div>
      </div>
  )
}

export default Login