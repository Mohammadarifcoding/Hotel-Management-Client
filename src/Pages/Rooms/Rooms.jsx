import React, { useContext, useEffect, useState } from "react";
import UseAxious from "../../Hooks/UseAxious";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RoomsPic from "./RoomsPic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { FaFilter } from "react-icons/fa";

const Rooms = () => {

  useEffect(() => {
    // Update the document title for this page
    document.title = 'Smart Hotel || Rooms';
  }, []);
 
  const [value, setValue] = useState('')
  const uri = `/rooms?order=${value}`;
  const {loading ,user, In, update , Google , OUT ,  creatUser} = useContext(AuthContext)

  const axiousSecure = UseAxious();
  const handleChange = (e)=>{
    setValue(e.target.value)
    console.log(e.target.value)
 }
 useEffect(() => {
  window.scrollTo(0, 0);
}, [uri]);


  
 


  const getRoom = async()=>{
    const res = await axiousSecure.get(uri)
    return res
  }

  const { data:RoomData, isLoading , isError , error } = useQuery({
    queryKey: ['Rooms',uri],
    queryFn: getRoom
  })

  if(isLoading){
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
  if(isError){
    OUT()
  }

  return (
    <div>
      <div className="bg-[url('/roomsbg.jpg')] bg-cover bg-center w-full min-h-[50vh]">
        <div className="backdrop-brightness-[0.2] flex flex-col justify-center items-center min-h-[50vh] w-full h-full">
          <img src="/roomsvg.png" alt="" />
        </div>
      </div>
      <div className="relative w-72 mx-auto mt-5 flex items-center gap-3">
        <span className="flex items-center gap-3"><FaFilter></FaFilter> Filter</span>
       
        <select onChange={handleChange} className="block w-full py-2 px-3 border border-gray-300 rounded-lg bg-white text-gray-700 appearance-none hover:border-gray-500 focus:outline-none focus:ring focus:border-blue-500">
          <option value="">Select</option>
          <option value="desc">Highest to Lowest Price</option>
          <option value="asec">Lowest to Highest Price</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M11.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 10H5a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="grid  max-w-[1320px] my-10 gap-10 2xl:grid-cols-2 grid-cols-1 mx-auto">
        {RoomData.data.map((value) => (
          <RoomsPic key={value._id} data={value}></RoomsPic>
        ))}
      </div>
      {/* <div className="grid xl:grid-cols-3 max-w-5xl my-10 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto">
        {RoomData.data.map((value) => (
          <RoomsPic key={value._id} data={value}></RoomsPic>
        ))}
      </div> */}
    </div>
  );
};

export default Rooms;
