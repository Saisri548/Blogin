import React from 'react'

const Hero = () => {
    const cards=[
        {Title:"500+ ",
          Subtitle:"Authors" 
        },
        {
            Title:"10k+",
            Subtitle:"Readers"
        },
        {
            Title:"500+",
            Subtitle:"Blogs"
        }

    ]
  return (
    <div className="flex  justify-center gap-6 mt-4 ">
     {cards.map((blog)=>(
       <div  key={blog.Title} className='w-40 h-40 border border-black rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex flex-col items-center justify-center shadow-lg'>
        <h1 className='text-3xl text-white font-bold '>{blog.Title}</h1>
        <p className="text-xl text-white ">{blog.Subtitle}</p>
       </div>

      ))}
    </div>
  )
}

export default Hero
