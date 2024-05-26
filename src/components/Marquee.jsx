import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden '>

        {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration: 5}} className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] tracking-tighter uppercase -mb-1 font-bold'>
        We are Ochi
        </motion.h1>
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] tracking-tighter uppercase -mb-1 font-bold'>
        We are Ochi
        </motion.h1> */}

<motion.h1
          initial={{ x:0}}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear",  duration:10}}
          className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] tracking-tighter uppercase -mb-1 font-bold pr-20'
        >
          We are Ochi
        </motion.h1>

        <motion.h1
          initial={{ x:0 }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear",  duration:10 }}
          className='text-[18vw] leading-none font-["Founders Grotesk X-Condensed"] tracking-tighter uppercase -mb-1 font-bold pr-20'
        >
          We are Ochi
        </motion.h1>

      </div>
    </div>
  )
}

export default Marquee