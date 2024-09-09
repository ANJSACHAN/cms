import React from 'react';

import { Link, useNavigate , useState} from "react-router-dom";


const Create = () => {
  return (
    <div className='w-[90%] mx-auto ml-44'>
      <div className='p-20'>
      <h2 className='text-2xl font-bold'><strong>POST</strong></h2>
      <span>Create, edit, and manage the posts on your site.</span>
      <a href="./" className="text-blue-600">Learn More</a>
      
      <div className="flex justify-between items-center bg-gray-100 border border-gray-300 mt-5 p-2">
        <div className="flex space-x-4" id="status-bar-1">
          <div><button className="text-sm text-gray-800">Published (0)</button></div>
          <div><button className="text-sm text-gray-800">Drafts (0)</button></div>
          <div><button className="text-sm text-gray-800">Scheduled (0)</button></div>
          <div><button className="text-sm text-gray-800">Binned (0)</button></div>
        </div>
        <div className="text-lg cursor-pointer">🔍</div>
      </div>

      <div className="flex justify-between items-center bg-gray-100 border border-gray-300 mt-5 p-2">
        <div className="ml-4">Post</div>
        <Link to="addpost" className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Add a new post</Link>
      </div>

      <div className="pt-5 text-center">
        <img 
          id="no-post-found-img" 
          src="https://wordpress.com/calypso/images/pages/illustration-pages.svg" 
          alt="No posts found" 
          className="w-64 h-64 mx-auto"
        />
        <h2 className="text-3xl font-bold mb-10">No Post Found!</h2>
        <Link to="addpost" className="bg-blue-600 text-white px-6 py-2 text-lg">Add a new post</Link>
      </div>
      </div>
    </div>
  );
};

export default Create;
