import React, { useContext, useEffect, useState } from 'react';
import UseAxious from './../../Hooks/UseAxious';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import BookItem from './BookItem';
import { FaCalendarCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Dot from '../../Components/Dot/Dot';
import Swal from 'sweetalert2';

const MyBookings = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    useEffect(() => {
        // Update the document title for this page
        document.title = 'Smart Hotel || My Bookings';
      }, []);
    const { user , OUT } = useContext(AuthContext)
    
    const  AxiousSecure = UseAxious()
    const nav = useNavigate()

    const uri = `/myBookings?email=${user.email}`
    const getBooking = async()=>{
        const result = await AxiousSecure.get(uri)
        return result
    }
    const { data:Booking, isLoading , isError , error } = useQuery({
        queryKey: ['booking',user],
        queryFn: getBooking
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
    
      
     


    return (
        <div className="container mx-auto max-w-screen-lg p-4">
        <div className="overflow-x-auto">
            { Booking.data.length? 
            <>
            <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
                <thead>
                    <tr className=" text-blue-600">
                        <th className="px-6 py-3">Seat Id</th>
                        <th className="px-6 py-3">Price</th>
                        <th className="px-6 py-3"> Date</th>
                        <th className="px-6 py-3">Update</th>
                        <th className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                      
                         
                        {Booking.data?.map((value,i)=> <BookItem  num={i} style={'bg-blue-100'} key={value._id} data={value}></BookItem>)}
                        
                           
                      
                    
                    
                </tbody>
            </table>
            </> :
             <>
             <div className='flex justify-center flex-col items-center my-10'>
             <FaCalendarCheck className='w-[100px] h-[100px] '></FaCalendarCheck>

             <h2 className='md:text-3xl  text-xl my-5'>You haven't made your first booking yet</h2>

             <p>All you need to do go for the <span className='text-blue-500'>Rooms</span> Page </p>

             <Link to={'/rooms'}><button className='flex btn items-center hover:gap-3 bg-blue-500 my-4 text-white hover:bg-blue-700'>Rooms <FaArrowRight></FaArrowRight></button></Link>
             </div>
                
                </>}
            
        </div>
        
    </div>
    );
};

export default MyBookings;