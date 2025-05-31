import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




function Footer() {
  return (
    <footer className=' grid grid-cols-3 p-4 bg-[#e8ece8]'>
        <div className=' flex flex-col items-start mx-auto  p-4 text-black/40 font-semibold'>
            <h2 className=' font-bold text-black/80 mb-2'>Explore</h2>
            <h3>About Us</h3>
            <h3>Contact</h3>
        </div>
        <div className=' flex flex-col items-start mx-auto p-4 text-black/40 font-semibold'>
            <h2 className=' font-bold text-black/80 mb-2'>Legal</h2>
            <h3>Privicy Policy</h3>
            <h3>Terms of service</h3>
            <h3>Cookie policy</h3>
        </div>
        <div className=' flex flex-col items-start mx-auto  p-4 text-black/40 font-semibold'>
            <h2 className=' font-bold text-black/80 mx-auto mb-2'>Connect</h2>
            <div className=' flex flex-row items-center  gap-4 font-bold text-2xl'>
            <FontAwesomeIcon icon={faFacebook} color='orange' />
            <FontAwesomeIcon icon={faInstagram} color='orange' />
            <FontAwesomeIcon icon={faTwitter} color='orange' />

            </div>
        </div>
    </footer>
  )
}

export default Footer