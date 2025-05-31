// import React from 'react'

function Image({mealImage}:any) {
  return (
    <div className=" size-110 overflow-hidden rounded-2xl shadow-2xl ring-white/20 ring-2 ">
        <img src={mealImage} alt='meal image' className=" object-cover"/>
    </div>
  )
}

export default Image