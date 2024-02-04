import React, { useState } from 'react'
import {useSelector} from "react-redux"


const Hero = () => {
 
    const mode = useSelector((state) => state.ModesHandler.value)

    return (
<main className={`relative ${mode ? "bg-slate-50 text-gray-900" : "text-slate-50 bg-gray-900"}  overflow-hidden h-screen`}>
  <div className=" flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2  mb-12"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none ">
          Be on
          <span className="text-5xl sm:text-7xl">Time</span>
        </h1>
        <p className="text-sm sm:text-base">
          Dimension of reality that makes change possible and understandable. An
          indefinite and homogeneous environment in which natural events and
          human existence take place.
        </p>
        <div className="flex mt-8">
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-indigo-500 text-white border-2 border-transparent  text-md mr-4 hover:bg-indigo-400"
          >
            Get started
          </a>
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-indigo-500 hover:text-white text-indigo-500  hover:bg-indigo-500  text-md"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src="https://www.tailwind-kit.com/images/object/10.png"
          className="max-w-xs md:max-w-sm m-auto animate-bounce delay-700 duration-700 "
        />
      </div>
    </div>
  </div>
</main>

  )
}

export default Hero