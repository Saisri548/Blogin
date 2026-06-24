import React from 'react'

const Navabar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
       <img src="./blogin.png" width={100} height={100}/>
    <div className="flex items-center gap-8">
     <a className="hover:text-blue-500">Home</a>
     <a className="hover:text-blue-500">About</a>
     <a className="hover:text-blue-500">Blogs</a>
     <a className="hover:text-blue-500">Contact</a>
     <button className='px-4 py-2 rounded-xl bg-blue-500 text-white'>Login</button>
    </div>
    </nav>
  )
}

export default Navabar
