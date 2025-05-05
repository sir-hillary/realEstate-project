import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gray-100'>
            <div className='max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10'>
                <div className='flex-1'>
                    <h1 className='text-4xl lg:text-6xl font-bold text-gray-800 mb-4'>Find Your Dream Home at ease.</h1>
                    <p>Explore luxury apartments, family homes, and more. Your Perfect space is waiting.</p>
                    <div className='flex gap-4'>
                        <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>Browse Listings</button>
                        <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition'>Contact Us</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img 
                    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                     alt="modern home"
                     className='rounded-xl shadow-lg w-full'
                      />
                </div>
            </div>
        </section>
    )
}

export default Hero
