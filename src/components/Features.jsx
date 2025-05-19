import {motion, useAnimation} from "framer-motion";


function Features() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index)=> {
    cards[index].start({y: "0"});
  };

  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"});
  };

  return (
    <div data-scroll data-scroll-section className=' relative w-full py-20'>
      <div className='w-full px-11 border-b-1 border-[#7c7c7c] pb-8   '>
        <h1 className='text-6xl text-[#212121] font-Inconsolata tracking-tighter'>
          Featured projects
          </h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-3 mt-20 ">
            <motion.div 
             onHoverStart={()=> handleHover(0)} 
             onHoverEnd={()=> handleHoverEnd(0)}  
             className="cardcontainer relative w-1/2 h-[80vh] ">
                <h1 className='absolute flex overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl text-[#212121] -mb-10 leading-none font-Inconsolata tracking-tighter font-bold uppercase'>
                {"Fyde".split("").map((item, index)=>(
                <motion.span  key={index}              
                  initial={{y: "100%"}} 
                  animate={cards[0]}  
                  transition={{ease: [0.22, 1, 0.36, 1],
                  delay: index*0.05}}
                  className="inline-block">{item}</motion.span> ))}
                </h1>
                <div className='card w-full h-full  rounded-xl overflow-hidden '>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                </div>
            </motion.div>
            <motion.div onHoverStart={()=> handleHover(1)}
                onHoverEnd={()=> handleHoverEnd(1)} 
                className="cardcontainer relative w-1/2 h-[80vh]">
                <motion.div className=' card w-full h-full  rounded-xl overflow-hidden '>
                <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl text-[#212121] -mb-10 leading-none font-Inconsolata tracking-tighter font-bold uppercase'>
                {"SPACESHIP".split("").map((item, index)=>(
                <motion.span  key={index}                
                  initial={{y: "100%"}} 
                  animate={cards[1]}  
                  transition={{ease: [0.22, 1, 0.36, 1],
                  delay: index*0.05}}
                  className="inline-block">{item}</motion.span> ))}
                </h1>
                    <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </motion.div>
            </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Features
