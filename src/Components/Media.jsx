import React from 'react'
import { Link, useNavigate , useState} from "react-router-dom";
function Media() {
  return (
    <div className='w-[90%] mx-auto ml-44'>
    <div className='p-20'>
    <h2 className='text-2xl font-bold'><strong>Media</strong></h2>
   
    
    <div className="flex justify-between items-center bg-gray-100 border border-gray-300 mt-5 p-2">
      <div className="flex space-x-4" id="status-bar-1">
        <div><button className="text-sm text-gray-800">Images(0)</button></div>
        <div><button className="text-sm text-gray-800">Video(0)</button></div>
        <div><button className="text-sm text-gray-800">Documents(0)</button></div>
        <div><button className="text-sm text-gray-800">Audio(0)</button></div>
      </div>
      <div className="flex space-x-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border border-gray-300 p-2" id="status-bar-1">
      <input type="text" className="text-lg  rounded-md focus:outline-none focus:border-gray-500 cursor-pointer border-black text-center" placeholder="Search media"/>
      <div className="text-lg cursor-pointer">🔍</div>
      </div>
     
    </div>

   
 
    </div>
  </div>
  )
}

export default Media