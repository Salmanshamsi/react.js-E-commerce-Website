import React from 'react'
import Carasoul from '../../Components/Carasoul/Carasoul'
import image1 from "../../assets/banner-images/image1.webp"
import image2 from "../../assets/banner-images/image2.webp"
import image3 from "../../assets/banner-images/image3.webp"
import image4 from "../../assets/banner-images/image4.png"
import ProdFilterMenu from '../../Components/ProdFilterMenu/ProdFilterMenu'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Newsletter from '../../Components/NewsLetter/NewsLetter'
import Example from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'

const Home = () => {
    const SliderImages = [image1,image2,image3,image4];
  return (
    <div id='/' >
        <Example/>
        <Carasoul images={SliderImages} />
        <div className='h-10 w-full text-gray-900 font-bold text-2xl flex justify-center items-center mt-5 '>
              <h1>Our Products</h1>
        </div>
        <div className="w-2/3 mx-auto">
            <div className="border-b-2 border-gray-300 shadow-md"></div>
        </div>
        <ProdFilterMenu/>
        <ProductCard/>
        <Newsletter/>
        <div className="w-2/3 mx-auto my-10 ">
            <div className="border-b-2 border-gray-300 shadow-md"></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home