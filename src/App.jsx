import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'



function App() {
 



  return (
    <>
     <div >
 
    <Navbar></Navbar>
   
    <Outlet></Outlet>
  
</div>
    </>
  )
}

export default App
