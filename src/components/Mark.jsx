import { motion } from "framer-motion";
import React from 'react'

const Mark = () => {
  return ( 
    <div data-scroll data-scroll-section data-scroll-speeed="-.7" className='w-full py-15 bg-[#04636A]  rounded-md '>
      <div className=' text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap justify-center items-center overflow-hidden'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 25 }} className='text-[17vw] leading-none text-white font-Inconsolata   font-bold pb-4 pt-0 tracking-tight uppercase '>Code.Create.Conquer.</motion.h1>
         <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 25 }} className='text-[17vw] leading-none text-white  font-Inconsolata   font-bold pb-4  pt-0  tracking-tight uppercase '>Code.Create.Conquer.</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 25 }} className='text-[17vw] leading-none text-white font-Inconsolata  font-bold pb-4 pt-0  tracking-tight uppercase '>Code.Create.Conquer.</motion.h1>
      </div>
    </div>
  )
}

export default Mark 
