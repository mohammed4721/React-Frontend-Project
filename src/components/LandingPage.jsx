import {motion} from "framer-motion";
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full h-screen bg-white pt-1 ' >
     <div className='textstructure mt-33 px-7 text-[#212121]'>
      {["smart", "solutions.", "seamless", "technology." ].map((item, index) =>{
        return  <div className='masker' key={index}>
          <div className='w-fit flex items-center'>
            {index === 0 && (
              <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.24, 1]}} className='w-[8vw] h-[4.4vw] bg-[#04636A]  bottom-0 rounded-3xl '> </motion.div>)}
            <h1 className='uppercase text-[7vw] leading-[5.5vw] tracking-tight font-Inconsolata font-bold ' > {item} </h1>

          </div>
        </div>
      })}
     </div>
     <div className='border-t-2 border-zinc-500 mt-20 flex justify-between items-center py-5 px-20 font-medium'>
      {["For public and private companies", "From the first pitch to Ipo"].map((item, index)=> 
      (<p className='text-md  tracking-tight leading-none text-[#212121]'>{item} </p>))}
      <div className='start flex items-center gap-5'>
      <div className='px-3 py-2 border-1 uppercase border-zinc-500 rounded-full font-medium text-[#212121]' >
        Start the Project </div>
      </div>
     </div>
    </div>
  )
}

export default LandingPage
