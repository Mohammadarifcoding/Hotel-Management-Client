import React, { useEffect, useState } from "react";
import ReactDatePicker from 'react-datepicker';
import UseAxious from "../../Hooks/UseAxious";
import  Swal  from 'sweetalert2';


const BookItem = ({data , style , num}) => {
    const {bookedDate ,email , _id ,seatId , price ,roomId} = data
    
    const [startDate, setStartDate] = useState(new Date(bookedDate));
     const AxiousSecure = UseAxious()

    // useEffect(()=>{
    //      AxiousSecure.put(`/UpdateBooking/${_id}`, date)
    //      .then(res => {
    //         console.log(res.data)
    //      })
    // },[date])


    const handleUpdate = ()=>{
      
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then ((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            AxiousSecure.put(`/UpdateBooking/${_id}`, {startDate})
          Swal.fire("Saved!", "", "success");
          location.reload()
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
          
        
    }

    const handleCancel = async ()=>{
      if(startDate){
        const booked = new Date(bookedDate)
        console.log(booked)
        const today = new Date()
        const millisecondsInDay = 1000 * 60 * 60 * 24;
        const differenceInDays = Math.floor((booked - today) / millisecondsInDay);
        if(differenceInDays > 0){
          console.log('you  can')
          Swal.fire({
            title: "Do you want to really want to delete?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                 AxiousSecure.delete(`/deleteBookings/${_id}`)
                 AxiousSecure.put(`/UpdateAvailability/${seatId}`)
              Swal.fire("Deleted!", "", "success");
                location.reload()
            } else if (result.isDenied) {
              Swal.fire("Coludn't complete", "", "info");
            }
          });
        }
        else{
      
          Swal.fire({
            title: "Not enought time !",
            text: "You can't cancel the booking now!",
            icon: "info"
          });

        }
        console.log('gg',differenceInDays)
        return
      }
      
     
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
      <button onClick={()=>{
        handleUpdate()
      }} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
          Update
        </button>
      </td>
      <td className="px-6 py-4 text-center">
        <button onClick={()=>{handleCancel()}} className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 focus:outline-none">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default BookItem;
