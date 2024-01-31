import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { CartDiplayHandler } from '../reduxTK/slices/CartDisplay'

const Cart = () => {

    const mode = useSelector((state) => state.ModesHandler.value)
    const isOpen = useSelector((state) => state.CartDisplay.value)
    const dispatch = useDispatch()


    return (
    <div className={`z-50 fixed backdrop-blur-sm ${isOpen?"lg:w-4/12 w-full":"w-0"} opacity-90 shadow-lg h-screen transform transition-all duration-800 ${mode?"bg-slate-50 text-gray-900":"text-slate-50 bg-gray-900"}`} >
        <div className='w-full flex justify-start p-5 text-2xl cursor-pointer' >
            <button onClick={(e)=>{
                e.preventDefault();
                if(isOpen){
                    dispatch(CartDiplayHandler(false))
                }else{
                    dispatch(CartDiplayHandler(true))
                }
            }} ><i class="fa-solid fa-xmark"></i></button>
        </div>
        {isOpen?<div>

            <div className='w-full p-5 flex justify-center items-center' >
                <h1>Your Shopping Cart</h1>
            </div>
        
        </div>:""}
    </div>
  )
}

export default Cart