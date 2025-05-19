import React from 'react'

function Footer() {
  return (
    <div className='flex gap-5 w-full h-screen p-20'>
      <div className='w-1/2 h-full flex flex-col justify-between font-Inconsolata tracking-tighter font-bold'>
      <div className='heading'>
        <h1 className='text-[6vw] leading-none -mb-6 text-[#212121] uppercase'>smart</h1>
      <h1 className='text-[6vw] leading-none -mb-6 text-[#212121] uppercase'>solutions</h1>
      </div>
       <div class=' bottom-0 left-7 w-35  px-4 py-2 z-50' >
        <img src="https://sakeshllc.com/wp-content/uploads/2024/05/SakeshBlue-e1716114832462.png" alt=""></img>
        </div>
      </div>
      <div className='flex flex-col gap-[25vw] w-1/2'>
        <h1 className='font-Inconsolata tracking-tighter font-bold text-[6vw] leading-none -mb-8 text-[#212121] uppercase'>socials</h1>
        <div className='dets '>
            <a className='block text-xl font-md font-Inconsolata tracking-tight ' href="#">Facebook</a>
            <a className='block text-xl font-md font-Inconsolata tracking-tight ' href="#">Instagram</a>
            <a className='block text-xl font-md font-Inconsolata tracking-tight ' href="#">Linkedin</a>
            <a className='block text-xl font-md font-Inconsolata tracking-tight ' href="#">X</a>
        </div>

      </div>
    </div>
  )
}

export default Footer
