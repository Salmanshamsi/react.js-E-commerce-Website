import React from 'react'
import Footer from '../componenets/Footer'
import Hero from '../componenets/Hero'
import ProductCard from '../componenets/ProductCard'
import {useSelector, useDispatch} from "react-redux"
import Banner from '../componenets/Banner'
import FeedBack from '../componenets/FeedBack'
import Pagination from '../componenets/Pagination'
import CatogaryFilter from '../componenets/CatogaryFilter'
import Navbar from '../componenets/Navbar'

const Home = () => {

  const mode = useSelector((state) => state.ModesHandler.value)

  return (
    <div className='h-full' >
          <div className='flex justify-between flex-col h-full' >
            <div className='mb-52' >
              <Navbar/>
            </div>
              <div>
                <Hero/>
              </div>
              <div className={`w-full h-auto ${mode?"text-gray-900 bg-slate-50":"bg-gray-900 text-white"}`} >
                    <div className='w-full p-3 gap-3 flex flex-col items-center justify-center text-3xl' >
                      <h1 className='font-bold' >Featured Products</h1>
                      <hr className={`${mode?"border-slate-200":"border-gray-700"} w-8/12 drop-shadow-md bg-gray-50 shadow-md border-1 rounded-full`} />
                    </div>
                    <div className='w-full h-auto flex flex-wrap  justify-center' >
                        <div className='w-full p-3 flex h-auto  md:pl-12 justify-center md:justify-start' >
                          <CatogaryFilter/>
                        </div>
                        <ProductCard/>
                        <div className='w-full h-auto p-3 flex items-center justify-center' >
                              <Pagination/>
                        </div>
                    </div>
                    <div>
                      <Banner/>
                    </div>
              </div>
              <Footer/>
          </div>
    </div>
  )
}

export default Home