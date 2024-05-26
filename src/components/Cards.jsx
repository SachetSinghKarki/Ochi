import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
    <div className='cardcontainer w-1/2 h-[50vh] '>
        <div className='card relative w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Sachet Singh Karki</button>
        </div>

    </div>
    <div className='cardcontainer w-1/2 flex gap-5 h-[50vh]'>
    <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
     <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Sachet Singh Karki</button>
    </div>
    <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;Sachet Singh Karki</button>
    </div>
    </div>
    </div>
  )
}

export default Cards