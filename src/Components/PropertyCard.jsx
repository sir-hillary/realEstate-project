import React from 'react'
import { FaBed } from 'react-icons/fa'
import { MdBathroom } from 'react-icons/md'

const PropertyCard = ({image, title, location, rent, beds, bathroom}) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300'>
      <img src={image} alt="title" className='w-full h-56 object-cover' />
      <div className='p-5'>
        <h2>{title}</h2>
        <p>{location}</p>
        <p>${rent}</p>

        <div className='flex justify-between text-sm text-gray-600'>
            <p className='flex items-center justify-center gap-5'><FaBed className='text-blue-600' />{beds} Beds</p>
            <p className='flex items-center justify-center gap-5'><MdBathroom />{bathroom} {bathroom > 1 ? "bathrooms" : "bathroom"}</p>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
