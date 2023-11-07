import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Dot from './Components/Dot/Dot'




function App() {
 



  return (
    <>
     <div >
 
    <Navbar></Navbar>
   
    <Outlet></Outlet>
    <Footer></Footer>
    
 <Dot></Dot>
</div>
    </>
  )
}

export default App
