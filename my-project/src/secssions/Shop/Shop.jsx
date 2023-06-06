import React from 'react'
import ProductSearch from '../../Components/ProductSearch/ProductSearch'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Example from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'


const Shop = () => {
  return (
    <>
    <Example/>
    <div className='m-20' id='shop' >
      <ProductSearch/>
      <ProductCard/>
    </div>
    <Footer/>
    </>
  )
}

export default Shop