import React from 'react'
import img from "../../assets/banner-images/image3.webp"
import Example from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'


const About = () => {
  return (
    <>
    <Example/>
    <div id='about' className=' flex h-full w-full mt-16 p-10 justify-center items-center '>
          <img src={img} alt="" className='object-cover h-96 w-96 rounded-md shadow-xl max-sm:hidden max-md:hidden ' />
      <div className='h-3/6 w-96 p-6 text-sm space-y-5 ' >
        <h1 className='font-bold text-2xl' >About us</h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita alias earum omnis vero! 
          Et, aspernatur molestiae. Fugit consequatur voluptate tempore magni rerum est ab! Voluptates
           tenetur reiciendis voluptate ad, odit odio assumenda nam nesciunt autem, alias doloribus
            provident placeat fugit repellat non inventore magni fugiat. Cupiditate minus culpa maxime iure,
             laborum consequatur ducimus praesentium eligendi a optio odit, deleniti qui fugit mollitia numquam.
              Alias maiores voluptates, tempora non eligendi quaerat blanditiis aspernatur adipisci quo? 
              Exercitationem mollitia omnis tempore, beatae fugit amet ab fuga, nihil aspernatur rerum hic aliquam, 
          dignissimos provident rem error incidunt ex vero repellendus modi eum laudantium. Quod.
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
