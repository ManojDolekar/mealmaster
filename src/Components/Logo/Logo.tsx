// import React from 'react'
import mealLogo from'../../Images/39555df2630a18637357f6b27748a360.png'

function Logo() {
  return (
    <div className={`size-12  p-4  flex flex-col items-center justify-center`}>
        <img src={mealLogo} alt="logo" className='object-cover w-full scale-250 mb-2 my-2' />
        <h3 className='font-bold text-sm '><span className=' text-amber-600'>Meal</span>Master</h3>
    </div>
  )
}

export default Logo