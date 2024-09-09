import React, { useState } from 'react';

const AddUser = () => {
    const [role, setRole] = useState('Editor');
    const [email, setEmail] = useState('');
    const [isContractor, setIsContractor] = useState(false);
    const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log('Form submitted:', { role, email, isContractor, message });
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Team Members</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Role
          </label>
          <select className="w-full border rounded-md px-3 py-2" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Administrator">Administrator</option>
            <option value="Editor">Editor</option>
            <option value="Author">Author</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email or Username
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            className="w-full border rounded-md px-3 py-2"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            id="contractor-checkbox"
            checked={isContractor}
            onChange={() => setIsContractor(!isContractor)}
          />
          <label className="ml-2 text-gray-700" htmlFor="contractor-checkbox">
            This user is a contractor, freelancer, consultant, or agency
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send Invitation
        </button>
      </form>
    </div>
  );
}

export default AddUser