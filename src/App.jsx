import React, { useState } from 'react'
import Hero from './Components/hero'
import Listings from './Components/Listings'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AdminPanel from './Components/AdminPanel'

const App = () => {

const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      <Navbar />
      <div className='flex justify-end p-4'>
        <button
        onClick={()=>setIsAdmin(!isAdmin)}
        className='text-sm bg-gray-800 text-white px-4 py-1 rounded'
        >
          Switch to {isAdmin ? "user" : "mode"} Mode
        </button>
      </div>
      <Hero />
      {isAdmin ? <AdminPanel  /> : <Listings />}
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
