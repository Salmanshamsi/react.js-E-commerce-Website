import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import AddProd from '../AddProd/AddProd'

const DashboardScreens = ({title}) => {

  const [addProdModal,setAddProdModal] = useState("hidden");

  return (
    <div>
        <DataTable title={title} />
        <AddProd visiblity={addProdModal} setVisiblity={setAddProdModal} />
          {title == "products" ? <button 
          onClick={(e)=>{
            e.preventDefault();
              setAddProdModal("visible");
          }} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3  px-4 border border-blue-500 hover:border-transparent rounded ' >
        + Add products</button> : ""}
    </div>
  )
}

export default DashboardScreens