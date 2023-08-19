import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formHandler } from '../../reduxTK/Slices/FilterProdSlice';
import AddProd from '../AddProd/AddProd';
import { useState } from 'react';


const ProductCard = () => {
  const CurSt = useSelector((s)=>s.product.data);
  const CurSt2 = useSelector((s)=>s.product.form);

  const dispatch = useDispatch();


    const data = CurSt?.map((e,i)=>{
  return (
        
      <div key={i} className="max-w-sm rounded m-0 overflow-hidden shadow-xl hover:shadow-md">
      <img className="w-full" src={e?.image} />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{e?.title}</div>
        <p className="text-gray-700 text-base">
          {e.disc} 
        </p>
      </div>
      <div className="px-4 pt-2 pb-2" 
        onClick={(e)=>{
            e.preventDefault();
            dispatch(formHandler(true));
        }}
      >
        <span className="inline-block bg-gray-200 rounded-full px-3 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
        </span>
      </div>
    </div>
  )})

  return(
    <>
        <div className='flex justify-evenly flex-wrap mx-3 gap-10 my-10'>
            {data}
        </div>    
    </>
  );

}

export default ProductCard