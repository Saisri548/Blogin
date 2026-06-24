import React from 'react'
import { useNavigate } from 'react-router'
const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <div className=" flex flex-col items-center   px-4">
     <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
        BLOGIN
      </h1>
      <p className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text'>Learn Share Grow </p>
    <div className="flex flex-row items-center mt-8">
    <button onClick={()=>navigate("/BlogForm")}className="px-6 py-3 rounded-2xl bg-gradient-to-b from-[#06b6d4] via-[#2563eb] to-[#6366f1] text-white font-semibold shadow-lg shadow-blue-500/50">
  Get Started
</button>
     <button  className="px-6 py-3  m-4 rounded-2xl bg-gradient-to-bl
from-[#ffe4e6]
to-[#ccfbf1]
">Explore more Blogs</button>
    </div>
    </div>
    </div>
    
  )
}

export default Home
