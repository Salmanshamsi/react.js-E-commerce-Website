import React from 'react'
import FeedBack from '../componenets/FeedBack'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import {useSelector} from "react-redux"

const Reviews = () => {
    const mode = useSelector((state) => state.ModesHandler.value)
  return (
    <div className={`${mode?"text-gray-900 bg-slate-50":"bg-gray-900 text-white"}`} >
        <Navbar/>
        <div className='mt-52 w-full p-3 gap-3 flex flex-col items-center justify-center text-3xl' >
            <h1 className='font-bold' >FeedBack</h1>
            <p className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam?</p>
            <hr className={`w-8/12 drop-shadow-md  shadow-md border-1 rounded-full ${mode?"border-slate-200":"border-gray-700"}  `} />
        </div>
        <FeedBack/>
        <Footer/>
    </div>
  )
}

export default Reviews