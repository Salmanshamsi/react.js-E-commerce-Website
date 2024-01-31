import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { modeHandler } from '../reduxTK/slices/ModesHandler'
import { CartDiplayHandler } from '../reduxTK/slices/CartDisplay'
import { LoginDiplayHandler } from '../reduxTK/slices/Login'

const Navbar = () => {
    const mode = useSelector((state) => state.ModesHandler.value)
    const isOpen = useSelector((state) => state.CartDisplay.value)
    const dispatch = useDispatch()
    const [isMobileMenuOpen,setisMobileMenuOpen] = useState(false) 
    const [isSearch,setisSearch] = useState(false)

  return (
    <>
    <div className={`w-full shadow-md fixed top-0 h-16 flex  justify-between z-40 ${mode ? "bg-slate-50 text-gray-900" : "text-slate-50 bg-gray-900"}`}>
    
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
        <li className='cursor-pointer' >Home</li>
        <li className='cursor-pointer' >About</li>
        <li className='cursor-pointer' >Products</li>
        <li className='cursor-pointer' >Contact</li>
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

        <li>
            <div className='flex gap-3'>
                <input
                    type="text"
                    placeholder='search what you want'
                    className={`shadow-sm text-sm p-2 ${isSearch ? '' : 'hidden'} transition-all transform duration-700 delay-100 rounded-md`}
                />
                <button onClick={(e) => {
                    e.preventDefault();
                    setisSearch(!isSearch);
                }} className='px-3 py-1 text-white bg-blue-600 rounded-md'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </li>
    </ul>
    
    
    </div>

        
        {/*for  Mobile screen  */}

        {isMobileMenuOpen ? <ul className={` flex md:hidden ${isMobileMenuOpen}  opacity-95  ${mode ? "bg-slate-50 text-gray-900" : "text-slate-50 bg-gray-900"} fixed top-0 flex-col sm:gap-8 text-2xl w-full  ${isMobileMenuOpen ? "h-auto" : "h-0"} mt-16 items-center`}>
        <li className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Home</li>
        <li className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >About</li>
        <li className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Products</li>
        <li className='cursor-pointer w-full h-full flex items-center justify-center p-5 ' >Contact</li>
    </ul> : "" }

    </>

  )
}

export default Navbar