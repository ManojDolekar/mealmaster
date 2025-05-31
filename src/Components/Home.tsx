import React from 'react'
import Banner from './HomePage-Componets/Banner'
import bannerImg from '../Images/pexels-adonyi-foto-2064359.jpg'
import Slider from './Slider/Slider'

function Home() {
  return (
    <div style={{backgroundImage:`url(${bannerImg})`}} className=' bg-fixed bg-cover'>
        <Banner/>
        <div className=' bg-[#e8ece8]'>
        <Slider/>
        </div>
    </div>
  )
}

export default Home