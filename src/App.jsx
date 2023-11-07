import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Dot from './Components/Dot/Dot'




function App() {
   const [loading,setLoading] = useState(true)

   setTimeout(() => {
    setLoading(false)
   }, 5000);

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
