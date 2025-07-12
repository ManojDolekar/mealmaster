// import React from 'react'
// import Banner from './HomePage-Componets/Banner'
// import bannerImg from '../Images/pexels-adonyi-foto-2064359.jpg'
// import Slider from './Slider/Slider'

// function Home() {
//   return (
//     <div style={{backgroundImage:`url(${bannerImg})`}} className=' bg-fixed bg-cover'>
//         <Banner/>
//         <div className=' bg-[#e8ece8]'>
//         <Slider/>
//         </div>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import Banner from './HomePage-Componets/Banner';
import bannerImg from '../Images/pexels-adonyi-foto-2064359.jpg';
import Slider from './Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCompass } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section with Background Image */}
      <section
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="relative bg-fixed bg-cover bg-center w-full min-h-[90vh] flex items-center justify-center text-white"
      >
        <Banner/>
      </section>

      {/* Featured Slider Section */}
      <section className="bg-[#e8ece8] py-16">
        <div className="text-center mb-10">
          <FontAwesomeIcon icon={faCompass} className="w-10 h-10 mx-auto mb-3 text-gray-700 animate-pulse" />
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Explore Popular Recipes</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Dive into our carefully curated meals — easy to follow, fun to cook, and delicious to eat!
          </p>
        </div>
        <Slider />
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-6 text-gray-800 leading-snug">
            Hungry for something new?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a home chef or just getting started, discover recipes that fit your flavor. Meal Master helps you turn ingredients into magic.
          </p>
          <a
            href=""
            className="inline-flex items-center gap-3 bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faCompass} className="w-5 h-5 text-white" />
            Explore All Recipes
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
