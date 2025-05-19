import React from 'react'

function Navbar() {
  return (
    <div className=" fixed z-[999] w-full h-screen px-20 py-8  flex justify-between">
       <div className='logo'>
       <div class='fixed top-0 left-7 w-50 flex items-center px-4 py-2 z-50' >
        <img src="https://sakeshllc.com/wp-content/uploads/2024/05/SakeshBlue-e1716114832462.png" alt=""></img>
        </div>
       </div>
       <div className='links flex gap-10'>
        {["Services", "Our Work", "About Us", "Insights", "ContactUs"].map((item, index) => (
            <a key={index} className={`text-md  capitalize font-medium  text-[#212121] ${index===4 && "ml-32"}` }> {item} </a>
        )) }
       </div>
    </div>
  )
}

export default Navbar
