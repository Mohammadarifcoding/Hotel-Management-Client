import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Login = () => {
  const {In} = useContext(AuthContext)
  
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    In(email,password)
    .then(res => {
      console.log(res.user)
    })
    .catch(err => {
      console.log(err)
    })


  };
  const handleback = ()=>{
    window.history.back()
  }

  return (
    <form
      onSubmit={handleLogin}
      className="form mx-auto max-w-md bg-white border-2 my-[5%] border-blue-500  p-8 rounded-lg"
    >
      <div onClick={handleback} className='hover:border-2 hover:border-blue-600 border-2 p-3 border-white rounded-full'>
        <FaArrowLeft  className=''></FaArrowLeft>
        </div>
      <p className=" text-2xl title text-blue-600 text-center font-semibold relative flex items-center  py-3">
        Login
      </p>
      <p className="message text-gray-700 mb-2 ">
        SignIn now to access all the features
      </p>
   
      <label className="relative ">
        <input
          required
          name="email"
          placeholder="Email"
          type="email"
          className="input w-full p-2 mb-2 outline-none border border-gray-400 rounded-lg"
        />
      </label>
      <label className="relative">
        <input
          required
          name="password"
          placeholder="Your Password"
          type="password"
          className="input w-full p-2 mb-2 outline-none border border-gray-400 rounded-lg"
        />
      </label>
      
      <button className="submit bg-blue-600 w-full mt-5 p-2 rounded-lg text-white text-lg transition duration-300 ease-in">
        Login
      </button>
      <p className="signin text-gray-700  text-center mt-2 ">
        New user? 
        <Link to={'/register'} className="text-blue-500 ml-2  hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
