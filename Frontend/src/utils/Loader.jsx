import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loader = () => {
  return (
    <div className='bg-black w-full min-h-screen flex items-center justify-center'>   
     <span className='w-[306px] h-auto flex flex-col items-center justify-center gap-1 text-white'>
         <DotLottieReact  
      src="https://lottie.host/b5ca3a82-b970-45c3-a948-c66801edf8c0/Fmg4v7G0vO.lottie"
      loop
      autoplay
    />
   <span> Loading...</span>
    </span>  </div>
  )
}

export default Loader