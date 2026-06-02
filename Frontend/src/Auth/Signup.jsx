import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../assets/auth.png'
import axios from 'axios'
const Signup = () => {
  const [name,setName]= useState("")
    const [email,setEmail]= useState("")
      const [phone,setPhone]= useState("")
        const [password,setPassword]= useState("")
        const navigate= useNavigate()
        const handleSubmit = async (e)=>{
          e.preventDefault()
           console.log("Form submitted"); 
          try{
// const res = await axios.post('http://localhost:3000/auth/sign',{name,phone,email,password,},{withCredentials:true}
// )
    const res = await axios.post(
      "http://localhost:3000/auth/sign",
      { name,email,phone, password },
      { withCredentials: true }
    );
await axios.post('http://localhost:3000/auth/send-otp',{email},{withCredentials:true})
  console.log(res.data),
  console.log("Email received:", email)
// console.log("User found:", existingUser)

 setTimeout(() => {
  navigate('/signup-verification',{state:{email}
  }
  )
 }, 1000);
 alert("user created ")
          }catch(err){
            console.log(err,'error occured')
          }
        }
  return (
    <div className='w-full  bg-[#fffff0]'>
        <div className='flex items-center'>
            <div className='w-[35%] bg-black h-[100vh] flex items-center'><div className='w-[6%]'><h1 className='text-[#fffff0] relative top-11 text-[8rem] font-black uppercase'>Fresh. Fun. Flavor.</h1></div></div>
<div className='absolute'><img className='relative w-[30rem] left-[18rem]  spin '       src={auth} alt="" /></div>

<div className='flex flex-col gap-6 justify-center items-center absolute  right-10 top-36'>
    <div className='flex flex-col gap-3 items-center justify-center text-black'>
    <h2 className='md:text-5xl capitalize text-4xl font-semibold font-[Imperial_Script]'>Create Your Doodle Garden Account</h2>
    <p className='font-outfit w-[50vw] text-center text-xs md:px-32 md:text-lg text-semibold'>Join our little food family! Save your favorites, enjoy smooth ordering, and get special offers.</p>
    </div>
 <div className='flex flex-col w-[100%] lg:w-[70%]  md:w-[85%] gap-12 justify-start p-10 rounded-xl border-2'>
    <form  onSubmit={handleSubmit} className='flex-col flex gap-8'>
    <input type="text" className='border-b-[0.1rem] pb-1  text-black placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Full Name'  name="name" value={name} onChange={(e)=>setName(e.target.value)} id="name" />
<input type="tel" className='border-b-[0.1rem] pb-1  text-black placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Phone Number'  name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} id="phone" />
        <input type="email" className='border-b-[0.1rem] pb-1  text-black  placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Email Address'  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
          <input type="password" className='border-b-[0.1rem] pb-1  text-black  placeholder:text-black placeholder:font-[Outfit] w-full text-lg font-[Outfit] outline-none' placeholder='Your Password'  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" />
                <div className='flex py-3 justify-center items-center w-full '>
            <button 
  type="submit"
  className='flex border-black border w-full bg-black py-2 md:py-3 px-2 text-xl uppercase font-antonio cursor-pointer text-white scale-100 hover:scale-95 items-center justify-center rounded-xl'
>
  Sign Up
</button>

              </div>
    </form>
 </div>
          
        </div>
 
        </div>
    </div>
  )
}

export default Signup