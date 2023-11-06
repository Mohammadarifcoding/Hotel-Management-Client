import React, { useEffect, useState } from "react";
import ReactDatePicker from 'react-datepicker';
import UseAxious from "../../Hooks/UseAxious";

const BookItem = ({data , style , num}) => {
    const {bookedDate ,email , _id ,seatId , price ,roomId} = data
    console.log(bookedDate)
    const [startDate, setStartDate] = useState(new Date(bookedDate));
     const AxiousSecure = UseAxious()
     const date = {startDate}
    // useEffect(()=>{
    //      AxiousSecure.put(`/UpdateBooking/${_id}`, date)
    //      .then(res => {
    //         console.log(res.data)
    //      })
    // },[date])


    const handleUpdate = async()=>{
          const result = await AxiousSecure.put(`/UpdateBooking/${_id}`, date)
          const res = result.data
          console.log(res)  
          location.reload()
    }

    const handleCancel = async ()=>{
      const result = await AxiousSecure.delete(`/deleteBookings/${_id}`)
      const res = result.data
      console.log(res)
      const secondResult = await AxiousSecure.put(`/UpdateAvailability/${seatId}`)
      const secondres = secondResult.data
      console.log(secondres)
      location.reload()
    }
    

  return (
    <tr className={num % 2 ? "bg-gray-100 ":  style }>
      <td className="px-6 py-4 text-center">{seatId}</td>
      <td className="px-6 py-4 text-center">${price}</td>
      <td className="px-6 py-4 text-center">
      <ReactDatePicker
      showIcon
      className="rounded-lg"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
      </td>
      <td className="px-6 py-4 text-center">
      <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
          Update
        </button>
      </td>
      <td className="px-6 py-4 text-center">
        <button onClick={handleCancel} className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 focus:outline-none">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default BookItem;
