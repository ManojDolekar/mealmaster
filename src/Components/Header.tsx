import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Logo from './Logo/Logo';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {
  const navigate=useNavigate();

  return (
    <section className='flex w-full p-2 bg-[#e8ece8] justify-between items-center flex-row '>
        <div onClick={ ()=>navigate('/')} className=' mx-6 cursor-pointer'> <Logo/></div>
        <div className='mx-6  visited:text-amber-600' >
          <Link to='random-meal' className=' items-center flex gap-2 hover:text-amber-600'><FontAwesomeIcon className=" text-black/50 text-xl" icon={faUtensils}  /> Browse random meal</Link> 
        </div>
    </section>
  )
}

export default Header