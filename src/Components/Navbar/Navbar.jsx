import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user , OUT} = useContext(AuthContext)
    const link = <>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/'}>Home</NavLink>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white  rounded-md mr-2 '} to={'/about'}>About</NavLink>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/contact'}>Contact</NavLink>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/login'}>Login</NavLink>

   
   
  </> 
  const handleLogout = ()=>{
     OUT()
     .then()
     .catch()
  }
    return (
      <div className='backdrop-blur-md z-30 bg-white/30'>
 <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {link}
      </ul>
    </div>
   <img src="https://i.ibb.co/jJWFr91/images-removebg-preview.png" className='w-24' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/user.png" />
        </div>
      </label>
      
    </div>
  </div>
</div>
      </div>
     
    );
};

export default Navbar;