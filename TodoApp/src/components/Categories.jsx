import React from 'react'

const Categories = () => {
    const categories=[ "Technology",
 

 "Design",
"Productivity",
"Education",
]
  return (
    <div className="grid grid-cols-4 items-center justify-center m-4 px-4 py-4 gap-6">
       
        {categories.map((index, c)=>(
            <div  key={index} className="w-72 h-40 rounded-lg flex flex-col items-center justify-center text-center
          bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg p-4">
                <h1   className="text-xl text-white font-bold">{c}</h1>
            </div>
        ))}
      
    </div>
  )
}

export default Categories
