import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import {useSelector} from "react-redux"
import ProductFiltersMain from '../componenets/ProductFiltersMain'
import ProductCard from '../componenets/ProductCard'
import Pagination from '../componenets/Pagination'

const Collections = () => {

    const mode = useSelector((state) => state.ModesHandler.value)

  return (
    <div>
            <div className={`h-full ${mode?"text-gray-900 bg-slate-50":"bg-gray-900 text-white"} `} >
                <div className='flex justify-between flex-col h-full' >
                    <Navbar/>
                    <div className={`w-full h-auto mt-56   `} >
                        <ProductFiltersMain/>
                        <div className='w-full h-auto flex flex-wrap items-center justify-center' >
                            <ProductCard/>
                        </div>
                        <div className='w-full h-auto p-3 flex items-center justify-center' >
                              <Pagination/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
    </div>
  )
}

export default Collections