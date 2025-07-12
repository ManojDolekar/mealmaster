// import React from 'react'
// import { Link ,useNavigate} from 'react-router-dom'
// import Logo from './Logo/Logo';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// function Header() {
//   const navigate=useNavigate();

//   return (
//     <section className='flex w-full p-2 bg-[#e8ece8] justify-between items-center flex-row '>
//         <div onClick={ ()=>navigate('/')} className='hover:rotate-2 hover:scale-105 duration-200 mx-6 cursor-pointer'> <Logo/></div>
//         <div className='mx-6  visited:text-amber-600' >
//           <Link to='random-meal' className=' group items-center flex gap-2 hover:text-amber-600'><FontAwesomeIcon className=" group-hover:scale-125 duration-200 group-hover:text-amber-600 text-black/50 text-xl" icon={faUtensils}  /> Browse random meal</Link> 
//         </div>
//     </section>
//   )
// }

// export default Header

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const navigate = useNavigate();

  return (
    <section className="flex w-full p-2 bg-[#e8ece8] justify-between items-center">
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        className="mx-16 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-[1.5deg]"
      >
        <Logo />
      </div>

      {/* Navigation Link */}
      <div className="mx-16">
        <Link
          to="/random-meal"
          className="group flex items-center gap-2 transition-all duration-300 hover:text-amber-600"
        >
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-black/50 text-xl transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-600"
          />
          <span className="text-sm font-medium transition-colors duration-300">
            Browse random meal
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Header;
