import React from 'react'
import PropertyCard from './PropertyCard'

const listings = [
    {
        image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
        title: "Modern 2 Bedroom Apartment.",
        location: "Kilimani, Nairobi",
        rent: "ksh 15,000",
        beds: 2,
        bathroom: 2,
    },
    {
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        title: "Modern Bedsitter.",
        location: "Karen, Nairobi",
        rent: "ksh 7,000",
        beds: 1,
        bathroom: 1,
    },
    {
        image: "https://www.pexels.com/photo/green-trees-near-body-of-water-11025293/",
        title: "Modern 3 Bedroom Apartment.",
        location: "Fedha Estate, Nairobi",
        rent: "ksh 21,000",
        beds: 3,
        bathroom: 4,
    },
] 

const Listings = () => {
    return (
        <section className='bg-gray-50 py-16 px-6'> 
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-3xl font-bold text-gray-800 mb-10'>Featured Listings.</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        listings.map((item,index)=>(
                            <PropertyCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Listings
