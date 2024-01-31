import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Hero from '../componenets/Hero'

const Home = () => {

  return (
    <div className='h-screen ' >
          <div className='flex justify-between flex-col h-full' >
              <Navbar/>
              <div>
                <Hero/>
              </div>
              <Footer/>
          </div>
    </div>
  )
}

export default Home