import React from 'react'
import "../../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { FilterMenuHandler } from '../../reduxTK/Slices/FilterProdSlice';

const ProdFilterMenu = () => {
    
    let CurSt = useSelector((s)=>s.product.value);
    

    const dispatch = useDispatch();

    const FilterButtons = ["suv","sedan","hash-back"];
  
    const show = FilterButtons.map((CurEl,i)=>{
        return(
            <button key={i} 

            onClick={(e)=>{
                e.preventDefault();
                dispatch(FilterMenuHandler(CurEl));
            }}
            
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3  px-4 border border-blue-500 hover:border-transparent rounded ">
            {CurEl}
            </button>
        );
    });

    return (
        <div className='w-full mt-8 space-x-5 flex justify-center items-center overflow-x-scroll hide-scroll'>
                {show}
        </div>
          )
}

export default ProdFilterMenu
