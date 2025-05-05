import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-gray-100 py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Contact Us</h2>
                <form className='bg-white p-8 rounded-xl shadow-md space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input 
                        type="text" 
                        placeholder='Your name'
                        className='border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                        name="" 
                        id="" 
                        />
                        <input 
                        type="email" 
                        placeholder='Your email'
                        className='border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                        name="" 
                        id="" 
                        />
                    </div>
                    <textarea
                    placeholder='Your Message'
                    rows="5"
                    required
                    className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    name="" 
                    id=""></textarea>
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
