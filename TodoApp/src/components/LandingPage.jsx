import React from 'react'
import Navabar from './Navabar'
import Home from './Home'
import Hero from './Hero'
import Features from './Features'
import Categories from './Categories'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <div>
          <Navabar/>
     <Home/>
<Hero/>
<h1 className='text-3xl text-center text-black font-bold mt-6'>Features of Blogin</h1>
<Features/>
<h1 className='text-3xl text-center text-black font-bold '>Our Famous Genres</h1>
<Categories/>
<Footer/>
    </div>
  )
}

export default LandingPage
