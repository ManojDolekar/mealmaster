// import { useEffect, useRef } from 'react'
// import dish from '../../Images/image-from-rawpixel-id-15319459-png.png'
// import { Link } from 'react-router-dom'
// import {animate} from 'motion'


// function Banner() { 

//   const dishRef=useRef<HTMLDivElement>(null);
//   const slogRef=useRef<HTMLDivElement>(null);

//   useEffect(()=>{
//     animations();
//   },[])

//   const animations=()=>{
//          if(dishRef.current){
//      animate( dishRef.current as Element,
//       {opacity:[0,1] ,scale:[0.95,1],y:[20,0]},
//       {
//         duration:1.2,
//         delay:1,
//         easing:'ease-out'
//       }    
//     )
//   }

//   if(slogRef.current){
//     animate(slogRef.current,
//       { 
//         opacity:[0,0.5,1],scale:[0.80,16,1],x:[-20,20,0]
//       },
//       {
//         duration:1.6,
//         delay:0.5,
//         easing:'ease-in-out'
//       }
//     )
//   }
//   }

 

//   return (
//     <div className=''>
//         <div className=' relative text-5xl flex flex-col text-black/80 items-center justify-center gap-y-8 font-bold w-full h-screen bg-white/20'>
//             Welcome to the MealMaster
//             <div ref={slogRef} className='text-2xl font-semibold font-sans'>
//                 Discover, Cook, and Savor Every Bite.
//             </div>
//           <Link to={'/all-meals'} className='' >
//             <button className='  cursor-pointer bg-white text-orange-500 px-6 py-2 text-lg shadow-2xl ring-1 ring-offset-orange-500 shadow-orange-500 rounded-xl text-shadow-2xs hover:scale-102 focus:scale-98 transition-all duration-200 hover:text-shadow-none hover:ring-0 '>
//                 Meals recipies
//             </button>
//           </Link>
//         <div ref={dishRef} className=' sm:w-55 w-50 md:w-60 absolute  bottom-4 right-4'>
//             <img src={dish} alt="dish" className='' />
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Banner

import { useEffect, useRef } from 'react';
import dish from '../../Images/image-from-rawpixel-id-15319459-png.png';
import { Link } from 'react-router-dom';
import { animate } from 'motion';

function Banner() {
  const dishRef = useRef<HTMLDivElement>(null);
  const slogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animations();
  }, []);

  const animations = () => {
    if (dishRef.current) {
      animate(
        dishRef.current,
        { opacity: [0, 1], scale: [0.95, 1], y: [20, 0] },
        {
          duration: 1.2,
          delay: 1,
          easing: 'ease-out',
        }
      );
    }

    if (slogRef.current) {
      animate(
        slogRef.current,
        { opacity: [0, 1], scale: [0.8, 1], x: [-20, 0] },
        {
          duration: 1.4,
          delay: 0.5,
          easing: 'ease-in-out',
        }
      );
    }
  };

  return (
    <div className="relative w-full h-screen bg-white/40 flex items-center justify-center text-center px-4">
      <div className="text-5xl font-bold text-black/80 flex flex-col gap-y-6">
        <div> Welcome to the <span className="text-orange-500">MealMaster</span></div>
        <div ref={slogRef} className="text-2xl font-semibold text-gray-700">
          Discover, Cook, and Savor Every Bite.
        </div>
        <Link to="/all-meals">
          <button className="bg-white text-orange-500 px-6 py-2 text-lg rounded-xl ring-1 ring-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
            Explore Recipes
          </button>
        </Link>
      </div>

      <div
        ref={dishRef}
        className="absolute bottom-6 right-6 w-32 sm:w-40 md:w-48 lg:w-56"
      >
        <img src={dish} alt="Delicious Dish" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Banner;
