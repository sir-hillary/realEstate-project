import React, { useState } from 'react'
import PropertyCard from './PropertyCard';

const AdminPanel = () => {

    const [listings, setListings] = useState([
        {
            id: 1,
            image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
            title: "Modern 2 Bedroom Apartment.",
            location: "Kilimani, Nairobi",
            rent: "ksh 15,000",
            beds: 2,
        },
    ]);

    const [form, setForm] = useState({
        id: null,
        image: "",
        title: "",
        location: "",
        rent: "",
        beds: "",
        bathroom: "",

    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const resetForm = () => {
        setForm({
            id: null,
            image: "",
            title: "",
            location: "",
            rent: "",
            beds: "",
            bathroom: "",
        });
        setIsEditing(false);
    }

    const handleAdd = () => {
        const newListing = { ...form, id: Date.now() };
        setListings([...listings, newListing]);
        resetForm();
    }

    const handleUpdate = () => {
        setListings(
            listings.map((item) => (item.id === form.id ? form : item))
        );

        resetForm();
    }

    const handleEdit = (listing) => {
        setForm(listing);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        setListings(listings.filter((item) => item.id !== id))
    }


    return (
        <section className='bg-gray-100 py-16 px-6'>
            <div className='max-w-5xl mx-auto'>
                <h2 className='text-3xl font-bold mb-6'>Admin Panel</h2>

                {/* Form */}

                <div className='bg-white p-6 rounded-xl shadow space-y-4 mb-10'>
                    <input
                        type="text"
                        name='image'
                        placeholder='image Url'
                        value={form.image}
                        onChange={handleChange}
                        className='w-full border px-4 py-2 rounded'
                    />
                    <input
                        type="text"
                        name='title'
                        placeholder='title'
                        value={form.title}
                        onChange={handleChange}
                        className='w-full border px-4 py-2 rounded'
                    />
                    <input
                        type="text"
                        name='location'
                        placeholder='location'
                        value={form.location}
                        onChange={handleChange}
                        className='w-full border px-4 py-2 rounded'
                    />
                    <input
                        type="text"
                        name='rent'
                        placeholder='rent'
                        value={form.rent}
                        onChange={handleChange}
                        className='w-full border px-4 py-2 rounded'
                    />
                    <input
                        type="number"
                        name='bathroom'
                        placeholder='bathrooms'
                        onChange={handleChange}
                        className='w-full border px-4 py-2 rounded'
                    />
                    <input 
                    type="number"
                    name='bed'
                    placeholder='beds'
                    onChange={handleChange}
                    className='w-full border px-4 py-2 rounded'
                    />
                </div>
                {
                    isEditing ? (
                        <button
                            onClick={handleUpdate}
                            className='bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600'
                        >
                            Update Listing
                        </button>
                    ) : (
                        <button
                            onClick={handleAdd}
                            className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
                        >
                            Add Listing
                        </button>
                    )
                }
            </div>

            {/* Listing Cards */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    listings.map((item) => (
                        <div key={item.id} className='relative'>
                            <PropertyCard {...item} />
                            <div className='absolute top-2 right-2 flex gap-2'>
                                <button
                                    onClick={() => handleEdit(item)}
                                    className='bg-yellow-500 text-white px-2 py-1 rounded text-xs'
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className='bg-red-500 text-white px-2 py-1 rounded text-xs'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default AdminPanel
