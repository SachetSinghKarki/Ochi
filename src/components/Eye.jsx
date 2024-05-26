import React, {useState, useEffect } from 'react'

function Eye () {

    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/3;
            let deltaY = mouseY - window.innerWidth/3;
           
            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
     <div  data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'> 

      <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

        {/* Eyes */}
      <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
      {/* Inner Eye */}
      <div className='relative w-2/3 h-2/3 r rounded-full bg-zinc-900'>
        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10 '>
         {/* Eye Dot */}
        <div className=' w-10 h-10 rounded-full bg-zinc-100'>
        </div>
        </div>
      </div>
      </div>

      {/* Eye */}
      <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'> 
      {/* Inner Eye */}
      <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
      <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] line  w-full  h-10 '>
      {/* Eye Dot */}
      <div className=' w-10 h-10 rounded-full bg-zinc-100'>
        </div>
        </div>
      </div>
      </div>

      </div>
     </div>
     </div>
    
  )
}

export default Eye

// import React, { useState, useEffect } from 'react';

// function Eye() {
//   const [rotate, setRotate] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const containerRect = document.querySelector('.eyes').getBoundingClientRect();
//       const containerCenterX = containerRect.left + containerRect.width / 2;
//       const containerCenterY = containerRect.top + containerRect.height / 2;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       const deltaX = mouseX - containerCenterX;
//       const deltaY = mouseY - containerCenterY;

//       const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle - 180);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='eyes w-full h-screen overflow-hidden'>
//       <div className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
//         <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//           {/* Eyes */}
//           <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//             {/* Inner Eye */}
//             <div className='relative w-2/3 h-2/3 r rounded-full bg-zinc-900'>
//               <div
//                 style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                 className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full h-10 '
//               >
//                 {/* Eye Dot */}
//                 <div className=' w-10 h-10 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>

//           {/* Eye */}
//           <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
//             {/* Inner Eye */}
//             <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
//               <div
//                 style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                 className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] line  w-full  h-10 '
//               >
//                 {/* Eye Dot */}
//                 <div className=' w-10 h-10 rounded-full bg-zinc-100'></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eye;
