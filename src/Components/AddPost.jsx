
import React from 'react'

function AddPost() {
  return (
    <div className="w-[70%] mx-auto ml-44 ">
      <div className='p-12'>
      <input
        type="text"
        className="w-full p-4 mb-4 text-3xl font-bold border border-gray-300 rounded"
        placeholder="Add a post title"
      />
      <textarea
        rows={10}
        className="w-full p-4 mb-4 text-base border border-gray-300 rounded"
        placeholder="Start writing or type '/' to insert a block"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Publish</button>
      </div>
    </div>
  );
}

export default AddPost;
