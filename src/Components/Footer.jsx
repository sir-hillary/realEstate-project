import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-blue-950 text-white py-10'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Logo and Description */}
                <div>
                    <h2 className='text-2xl font-bold mb-3'>Sirhillary</h2>
                    <p className='text-gray-300 text-sm'>Your trusted real estate partner. Helping you fing and list homes with ease.</p>
                </div>
                {/* Navigation Links */}
                <div>
                    <h3 className='text-xl font-semibold mb-3'>Quick links</h3>
                    <ul className='space-y-2 text-gray-300 text-sm'>
                        <li><a href="#home" className='hover:text-white'>Home</a></li>
                        <li><a href="#listings" className='hover:text-white'>Listings</a></li>
                        <li><a href="#about" className='hover:text-white'>About me</a></li>
                        <li><a href="#contact" className='hover:text-white'>Contact me</a></li>
                    </ul>
                </div>

                {/* Contact and socials */}

                <div>
                    <h3 className='text-xl font-semibold mb-3'>Contact</h3>
                    <p className='text-gray-300 text-sm mb-2'>h.o.omondi15@gmail.com</p>
                    <p className='text-gray-300 text-sm mb-2'>+254726436088</p>
                    <div className='flex gap-4 text-lg'>
                        <a href="#" className='hover:text-blue-400'><FaFacebook /></a>
                        <a href="#" className='hover:text-blue-400'><FaXTwitter /></a>
                        <a href="#" className='hover:text-blue-400'><FaInstagram /></a>
                        <a href="#" className='hover:text-blue-400'><FaLinkedin /></a>
                        <a href="#" className='hover:text-blue-400'><FaGithub /></a>
                    </div>
                </div>
            </div>

            <div className='mt-10 text-center text-gray-400 text-xs'>
                &copy; {new Date().getFullYear()} SirHillary. all rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
