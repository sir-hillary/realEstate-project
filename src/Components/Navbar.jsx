import React, { useState } from 'react'

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='bg-white shadow-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                {/* logo */}

                <div className='text-2xl font-bold text-blue-600'>SirHillary</div>

                {/* Desktop Nav */}

                <nav className='hidden md:flex gap-8 text-gray-700 font-medium'>
                    <a href="#home" className='hover:text-blue-600'>Home</a>
                    <a href="#listings" className='hover:text-blue-600'>Listings</a>
                    <a href="#about" className='hover:text-blue-600'>About Us</a>
                    <a href="#contact" className='hover:text-blue-600'>Contact us</a>
                </nav>

                {/* Call to Action */}

                <button className='hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>
                    List Property
                </button>

                {/* Mobile toggle */}

                <button
                    className='md:hidden text-gray-700 focus:outline-none'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {
                            isOpen ? (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth="2"
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            ) : (
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth="2"
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            )
                        }
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}

            {
                isOpen && (
                    <div className='md:hiddeen px-6 pb-4'>
                        <nav className='flex flex-col gap-4 text-gray-700'>
                            <a href="#home" className='hover:text-blue-600'>Home</a>
                            <a href="#listings" className='hover:text-blue-600'>Listings</a>
                            <a href="#about" className='hover:text-blue-600'>About Us</a>
                            <a href="#contact" className='hover:text-blue-600'>Contact us</a>
                            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg mt-2'>List Property</button>
                        </nav>
                    </div>
                )
            }

        </header>
    )
}

export default Navbar
