import background from '../assets/background.jpg'
import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
            let mouseX= e.clientX;
            let mouseY = e.clientY;
            // delta = difference
            let deltaX =  mouseX - window.innerWidth/2;
            let deltaY =  mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })






  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7"  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
        <div className='relative w-2/3 h-2/3 bg-[#212121] rounded-full'>
        <div style={{ transform: `rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-10'>
             <div className='w-5 h-5 bg-white rounded-full'></div>
        </div>
       
        </div>
        </div>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
        <div className='relative w-2/3 h-2/3 bg-[#212121] rounded-full'>
        <div style={{transform: `rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
             <div className='w-5 h-5 bg-white rounded-full'></div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Eyes
