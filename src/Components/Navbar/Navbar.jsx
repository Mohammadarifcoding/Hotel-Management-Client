import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user , OUT} = useContext(AuthContext)
  const [storedImage, setStoredImage] = useState(
    localStorage.getItem("userImage")
  );
    const link = <>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/'}>Home</NavLink> 
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white  rounded-md mr-2 '} to={'/rooms'}>Rooms</NavLink>
  <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/myBookings'}>My Bookings</NavLink>  
  {
    user ? '' : <NavLink className={'px-3 py-2 hover:bg-[#1E88E5] hover:text-white rounded-md mr-2 '} to={'/login'}>Login</NavLink>
  }
  
   
   
   
  </> 
  const handleLogout = ()=>{
     OUT()
     .then()
     .catch()
  }
    return (

<div className='max-w-7xl mx-auto'>
<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu space-y-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {link}
      </ul>
    </div>
    <img src="https://i.ibb.co/jJWFr91/images-removebg-preview.png" className='w-24' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
   
      {
        user ? <>
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={storedImage} />

          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
             {user.displayName} 
            <span className="badge">New</span>
          </a>
        </li>
        <li ><a className='flex flex-wrap'>{user.email}</a></li>
        <li><button onClick={handleLogout}>Log out</button></li>
      </ul>
        </>
        :
        <>
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         
            
          <img src="/user.png" />
          
          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {'Not Available'}
          </a>
        </li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Log In</Link></li>
      </ul>
        </>
      }
    </div>
  </div>
</div>
</div>

     
    );
};

export default Navbar;