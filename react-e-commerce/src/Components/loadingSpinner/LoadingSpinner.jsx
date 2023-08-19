import React from 'react'
import loading from "../../assets/loadingGif.gif"

const LoadingSpinner = () => {
  return (
    <div>
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50`}>
          <img src={loading} alt="" />
        </div>
    </div>
  )
}

export default LoadingSpinner