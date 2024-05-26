import React from 'react'
import sachuImage from './sachu.jpg'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-black font-["Neue_Montreal"] text-[4.5vw] leading-[4.5vw] tracking-tight  '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full border-t-[1px] mt-[5vw] border-[#93a55a] pt-10 flex gap-5'>
          
          <div className='w-1/2'>
           <h1 className='text-6xl text-black'>Our approach :</h1>
           <button className=' flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10'>Read More
           <div className='w-2 h-2 bg-zinc-300 rounded-full'>
           </div>
           </button>
          </div>
          <div className='ml-[20vh]'>
           <img className=' w-[60vh] h-[60vh] rounded-3xl ml-[20vh] ' src={sachuImage} alt="Sachu" />
          </div>
        </div>
    </div>
  )
}

export default About