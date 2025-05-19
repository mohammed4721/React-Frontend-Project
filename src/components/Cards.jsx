import React from 'react'

function Cards() {
  return (
    <div className='w-full  h-screen flex items-center gap-5 px-15'>
        <div className='cardcontainer h-[50vh] w-1/2 '>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full  bg-[#04636A]'>
                <img className='h-[15vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 bottom-5 uppercase rounded-3xl text-white font-Inconsolata tracking-tight'>Rating 5.0 on clutch</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex justify-center items-center rounded-xl w-full h-full  bg-[#212121]'>
                <img className='h-[20vh]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 border-2 left-10 bottom-5 uppercase rounded-3xl text-white font-Inconsolata tracking-tight'>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
