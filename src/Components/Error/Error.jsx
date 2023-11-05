import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
<div className="flex items-center justify-center h-screen">
  <div className="flex-col space-y-4 text-center">
    <img src="https://i.ibb.co/jJWFr91/images-removebg-preview.png" alt="" />
    <div className="text-5xl font-medium">Page not found</div>
    <div className="text-gray-500">Sorry, the page you're looking for isn't available.</div>
    <div className="flex items-center justify-center">
      <Link to={'/'} className="bg-[#1E88E5] px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">Visit Homepage</Link>
    </div>
  </div>
</div>
                                 
    );
};

export default Error;