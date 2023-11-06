import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvide = ({children}) => {
   const { user , loading} = useContext(AuthContext)
   const location = useLocation()
   if(loading){
    return <>
    <div className='  container w-[100px] mx-auto min-h-[70vh] flex justify-center items-center'>
   <div className="complete">
  <div className="complete__bar" />
  <div className="complete__bar" />
  <div className="complete__bar" />
  <div className="complete__bar" />
  <div className="complete__bar" />
  <div className="complete__ball" />
</div>

    </div>


    </>
   }
   if(user){
    return children
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>  
};

export default PrivateProvide;