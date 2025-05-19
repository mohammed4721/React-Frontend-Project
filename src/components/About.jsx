import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#212121] rounded-md'>
      <h1 className='text-white font-Inconsolata text-3xl tracking-tighter leading-[1.1]'> Sakesh Solutions is a forward-focused technology company that helps startups and enterprises streamline their digital transformation. We specialize in building smart, scalable solutions that solve real business problems, accelerate innovation, and empower teams with cutting-edge software, data, and cloud technology.</h1>
      <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-white'>
        <div className='w-1/2'>
        <h1 className='text-7xl text-white '> Our approach:</h1>
        <button className=' flex gap-10 uppercase items-center  mt-10 px-10 py-5 bg-white rounded-full text-[#212121] font-semibold'> Read More
            <div className='w-2 h-2 bg-zinc-900 rounded full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#212121] '>
        <img className='w-full h-full overflow-hidden rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
