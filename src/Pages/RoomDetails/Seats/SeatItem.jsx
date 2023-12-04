import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";
import Skeleton from "react-loading-skeleton";
import UseAxious from "../../../Hooks/UseAxious";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const SeatItem = ({ data, style, num, loadedData }) => {
  const { user } = useContext(AuthContext)
  const [bookingButton,setBookingButton] = useState(false)
  const loc = useLocation()
  const nav = useNavigate()
  const AxiousSecure = UseAxious()
  const {
    roomId,
    img,
    description,
    roomSize,
    roomImages,
    availability,
    priceRange,
  } = loadedData;
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  const [open, setOpen] = React.useState(false);

   const dateValue = moment(startDate).format("MMM Do YYYY"); 
   console.log(dateValue) 

  const handleOpen = () =>{
    if(!user){
      nav('/login', { state: loc.pathname });
    }
   return setOpen(!open);
  } 
  
 
 
  const handleConfirm = ()=>{
  const send = {bookedDate:startDate,bookedData:startDate,available:false}
    const bookedData = {bookedDate: startDate,bookedData: startDate , email:user.email ,seatId : data.seatId , price : data.price , roomId : roomId.toString() }
    setOpen(!open);
    console.log(startDate,'fdfadsfasdff')
    console.log('dfsadfas')
   AxiousSecure.put(`/RoomSeat/${data._id}`,send)
  .then(res => {
    console.log(startDate,'fdfadsfasdff')
    console.log('dfsadfas')
    AxiousSecure.post('/booked',bookedData)
    .then(res => {
      console.log(startDate,'fdfadsfasdff')
    console.log('dfsadfas')
      console.log(res.data)
      
      location.reload()
    })
  })
  .catch(err => console.log(err))
  
    
  }

   
  useEffect(()=>{
    AxiousSecure.get(`/RoomSeat/${data._id}`)
    .then(res => {
      
      if(res.data.available){
        setBookingButton(true)
      }
    })
  },[open])

  

  return (
    <>
      <tr className={` ${num % 2? style :""}`}>
        <td className="px-4 py-2 text-center">Room {data.seatId}</td>
        <td className="px-4 py-2 text-center">
          {bookingButton ? (
            <p>
              <span className="px-[10px] py-[1px] rounded-full mr-3 bg-[#1E88E5] "></span>{" "}
              Available
            </p>
          ) : (
            <p>
              <span className="px-[10px] py-[1px] rounded-full mr-3 bg-red-500 "></span>{" "}
              NotAvailable
            </p>
          )}
        </td>
        <td className="px-4 py-2 text-center">${data.price}</td>
        <td className="px-4 py-2 text-center">
          <DatePicker
          minDate={new Date()}
          showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </td>
        <td className="px-4 py-2 text-center">
          {
            bookingButton ? <>
             <button
            onClick={handleOpen}
            className={`bg-blue-500 disabled btn hover:bg-blue-700 text-white px-4 py-2 text-center rounded `}
          >
            Book Now
          </button>
            </>
            : <>
             <button
            disabled
            onClick={handleOpen}
            className={`bg-blue-500 disabled btn hover:bg-blue-700 text-white px-4 py-2 text-center rounded `}
          >
            Booked
          </button>

            </>
          }
          
        </td>
      </tr>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Please Check again</DialogHeader>
        <DialogBody className="flex items-center gap-6">
          <div className="flex justify-center w-[60%]  gap-2 flex-col items-center">
            <div className="max-w-[370px] ">
              {<img className="w-full rounded-xl" src={img} alt="" /> || (
                <Skeleton></Skeleton>
              )}
            </div>
            <div className="max-w-[370px] flex gap-2 ">
              {<img className="w-[32%]" src={roomImages[0]} alt="" /> || (
                <Skeleton></Skeleton>
              )}
              {<img className="w-[32%]" src={roomImages[1]} alt="" /> || (
                <Skeleton></Skeleton>
              )}
              {<img className="w-[32%]" src={img} alt="" /> || (
                <Skeleton></Skeleton>
              )}
            </div>
          </div>
          <div className="w-[40%]">
          <h1 className="mt-3 text-black font-bold text-center md:text-xl  text-lg">
            Room Number : <span className="text-[#1E88E5]">{data.seatId}</span>
          </h1>
          <p className="mt-3 lg:text-start text-center font-medium">
          Price <span className="text-[#1E88E5]">Per</span> Night : <span>${data.price}</span>
        </p>
        <p className="mt-3 lg:text-start text-center font-medium flex flex-col justify-center items-center"> <span> Your <span className="text-[#1E88E5]">Booking</span> Date</span> <hr /> <span> {dateValue} </span> </p>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default SeatItem;
