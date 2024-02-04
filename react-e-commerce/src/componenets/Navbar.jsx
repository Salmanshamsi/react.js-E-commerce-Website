import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { modeHandler } from '../reduxTK/slices/ModesHandler'
import { CartDiplayHandler } from '../reduxTK/slices/CartDisplay'
import { LoginDiplayHandler } from '../reduxTK/slices/Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const mode = useSelector((state) => state.ModesHandler.value)
    const isOpen = useSelector((state) => state.CartDisplay.value)
    const dispatch = useDispatch()
    const [isMobileMenuOpen,setisMobileMenuOpen] = useState(false) 
    const [isSearch,setisSearch] = useState(false)

  return (
    <div className={`w-full`} >
    
    <div className={`${mode ? "text-slate-50 bg-gray-900" : "bg-slate-50 text-gray-900"} justify-center w-full fixed top-0 h-12 items-center p-2 flex opacity-95  z-40 `} >
                    <h1>sale sale sale....20%</h1>
    </div>

    <div className={`${mode ? "bg-slate-50 border-slate-200 text-gray-900" : "text-slate-50 bg-gray-900 border-gray-700"} w-full fixed top-12 h-16 items-center p-12 flex opacity-95 border justify-between z-40 `} >
            <div className='text-3xl w-24' >
                logo        
            </div>
            <div className='w-full flex gap-10 ' >
                <input type="text" placeholder='search any thing that you want' className='p-3 w-full border rounded-md shadow-sm h-14'  name="" id="" />
                <button className='bg-indigo-900 text-white text-lg w-24  p- rounded-md h-14' >search</button>
            </div>
    </div>

    <div className={`w-full ${mode ? "bg-slate-50 border-slate-200 text-gray-900" : "text-slate-50 border-gray-700 bg-gray-900"}  fixed top-36 h-16 flex opacity-95 border  justify-between z-40`}>
    
    <div className='md:hidden flex w-full h-full items-center justify-start p-4 text-xl' >
        <button onClick={(e)=>{
            e.preventDefault();
            if(isMobileMenuOpen){
                setisMobileMenuOpen(false)
            }else{
                setisMobileMenuOpen(true)
            }
        }} ><i class="fa-solid fa-bars"></i></button>
    </div>

    <ul className={` hidden md:flex gap-4 sm:gap-8 text-lg w-full sm:w-auto h-full items-center pl-4 sm:pl-10`}>
        <Link to="/" className='cursor-pointer' >Home</Link>
        <Link to="/collections" className='cursor-pointer' >Collections</Link>
        <Link to="/reviews" className='cursor-pointer' >Reviews</Link>
        <Link to="/contact" className='cursor-pointer' >Contact</Link>
    </ul>

    <ul className='flex gap-4 sm:gap-8 text-lg w-full sm:w-auto justify-end h-full items-center pr-4 sm:pr-20'>
        <li className='cursor-pointer' onClick={(e) => {
        e.preventDefault()
        if (mode) {
            dispatch(modeHandler(false))
        } else {
            dispatch(modeHandler(true))
        }
        }}><i className={`fa-regular ${mode ? "fa-moon" : "fa-sun"}`}></i></li>

        <li className='cursor-pointer' onClick={(e) => {
        e.preventDefault();
        dispatch(LoginDiplayHandler(true))
        }}><i className="fa-regular fa-user"></i></li>

        <li className='cursor-pointer' onClick={(e) => {
        e.preventDefault();
        if (isOpen) {
            dispatch(CartDiplayHandler(false))
        } else {
            dispatch(CartDiplayHandler(true))
        }
        }}><i className="fa-solid fa-cart-arrow-down"></i></li>

    </ul>
    
    
    </div>
      
        {/*for  Mobile screen  */}

        {isMobileMenuOpen ? <div className='h-full fixed top-0 w-full backdrop-blur-sm z-30 mt-8' >
        
            <ul className={` flex md:hidden ${isMobileMenuOpen}  opacity-95  ${mode ? "bg-slate-50 text-gray-900" : "text-slate-50 bg-gray-900"} fixed top-0 flex-col sm:gap-8 text-2xl h-auto w-full  ${isMobileMenuOpen ? "h-auto" : "h-0"} mt-16 items-center`}>
                <Link to="/" className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Home</Link>
                <Link to="/collections" className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Collections</Link>
                <Link to="/reviews" className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Reviews</Link>
                <Link to="/contact" className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Contact</Link>
            </ul>
        
        </div> : "" }

    </div>

  )
}

export default Navbar