import React, { useState } from 'react'
import {useDispatch , useSelector} from "react-redux"
import { LoginDiplayHandler } from '../reduxTK/slices/Login';

const LoginModal = () => {

    const mode = useSelector((state) => state.ModesHandler.value)
    const isOPen = useSelector(state => state.Login.isOpen);
    const dispatch = useDispatch()

  return (
    isOPen ?<div className={`w-full ${isOPen} transform transition-all duration-700 h-screen fixed z-50 backdrop-blur-sm flex justify-center items-center bg-opacity-75`}>
    <div className={`h-auto w-full sm:w-3/4 lg:w-1/3 z-50 drop-shadow-lg p-5 opacity-80 rounded-md ${mode ? "bg-slate-50 text-gray-900" : "text-slate-50 bg-gray-900"}`}>
    <div onClick={(e) => {
        e.preventDefault();
        dispatch(LoginDiplayHandler(false));
    }} className='w-full flex text-3xl text-red-500 justify-end'>
        <i className="fa-solid fa-xmark"></i>
    </div>
    <div className='w-full text-5xl py-4 h-full flex items-center justify-center'>
        <i className="fa-regular fa-user"></i>
    </div>
    <form action="">
        <div className='flex flex-col gap-6'>
        <input type="text" className={`w-full rounded-md h-10 p-3 ${mode ? "border bg-slate-300" : ""}`} placeholder="Email@.com" />
        <input type="text" className={`w-full rounded-md h-10 p-3 ${mode ? "border bg-slate-300" : ""}`} placeholder="Password" />
        <div className='flex items-center justify-center'>
            <button className='w-full sm:w-3/5 lg:w-3/12 bg-blue-700 text-white text-lg p-2 rounded-md'>sign in</button>
        </div>
        <div className='flex gap-3'>
            <button className='w-full bg-blue-700 text-lg p-2 text-white rounded-md'><i className="fa-brands fa-facebook-f"></i></button>
            <button className='w-full bg-gray-50 text-lg p-2 border rounded-md text-green-500'><i className="fa-brands fa-google"></i></button>
        </div>
        </div>
    </form>
    <div className='w-full flex justify-center items-center p-3'>
        <a href="">Already have an account?</a>
    </div>
    </div>
    </div>: null
  )
}

export default LoginModal