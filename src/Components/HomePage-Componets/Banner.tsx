import { useEffect, useRef } from 'react'
import dish from '../../Images/image-from-rawpixel-id-15319459-png.png'
import { Link } from 'react-router-dom'
import {animate} from 'motion'


function Banner() { 

  const dishRef=useRef<HTMLDivElement>(null);
  const slogRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    animations();
  },[])

  const animations=()=>{
         if(dishRef.current){
     animate( dishRef.current as Element,
      {opacity:[0,1] ,scale:[0.95,1],y:[20,0]},
      {
        duration:1.2,
        delay:1,
        easing:'ease-out'
      }    
    )
  }

  if(slogRef.current){
    animate(slogRef.current,
      { 
        opacity:[0,0.5,1],scale:[0.80,16,1],x:[-20,20,0]
      },
      {
        duration:1.6,
        delay:0.5,
        easing:'ease-in-out'
      }
    )
  }
  }

 

  return (
    <div className=''>
        <div className=' relative text-5xl flex flex-col text-black/80 items-center justify-center gap-y-8 font-bold w-full h-screen bg-white/20'>
            Welcome to the MealMaster
            <div ref={slogRef} className='text-2xl font-semibold font-sans'>
                Discover, Cook, and Savor Every Bite.
            </div>
          <Link to={'/all-meals'} className='' >
            <button className='  cursor-pointer bg-white text-orange-500 px-6 py-2 text-lg shadow-2xl ring-1 ring-offset-orange-500 shadow-orange-500 rounded-xl text-shadow-2xs hover:scale-102 focus:scale-98 transition-all duration-200 hover:text-shadow-none hover:ring-0 '>
                Meals recipies
            </button>
          </Link>
        <div ref={dishRef} className=' sm:w-55 w-50 md:w-60 absolute  bottom-4 right-4'>
            <img src={dish} alt="dish" className='' />
        </div>
        </div>
    </div>
  )
}

export default Banner