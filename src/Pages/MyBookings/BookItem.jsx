import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import UseAxious from "../../Hooks/UseAxious";
import Swal from "sweetalert2";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import moment from "moment";

const BookItem = ({ data, style, num }) => {
  const { bookedDate, email, _id, seatId, price, roomId } = data;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [startDate, setStartDate] = useState(new Date(bookedDate));
  const AxiousSecure = UseAxious();

  // useEffect(()=>{
  //      AxiousSecure.put(`/UpdateBooking/${_id}`, date)
  //      .then(res => {
  //         console.log(res.data)
  //      })
  // },[date])

  const handleUpdate = async () => {
    const res = await AxiousSecure.put(`/UpdateBooking/${_id}`, { startDate });
    const data = res.data;
    console.log(data);
    handleOpen();
    Swal.fire("Saved!", "", "success");
    location.reload();
    return;
  };

  const handleCancel = async () => {
    if (startDate) {
      const booked = new Date(bookedDate);
      console.log(booked);
      const today = new Date();
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.floor((booked - today) / millisecondsInDay);
      if (differenceInDays > 1) {
        console.log("you  can");
        Swal.fire({
          title: "Do you want to really want to delete?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          console.log("I am here guys");
          if (result.isConfirmed) {
            AxiousSecure.delete(`/deleteBookings/${_id}`).then((data) => {
              AxiousSecure.put(`/UpdateAvailability/${seatId}`).then((data) => {
                Swal.fire("Deleted!", "", "success");
                location.reload();
              });
            });
            console.log("I have some to delete");
            
            console.log("I have some to delete");
          
          } else if (result.isDenied) {
            Swal.fire("Coludn't complete", "", "info");
          }
        });
      } else {
        Swal.fire({
          title: "Not enought time !",
          text: "You can't cancel the booking now!",
          icon: "info",
        });
      }

      console.log("gg", differenceInDays);
      return;
    }
  };

  return (
    <>
      <tr className={num % 2 ? "bg-gray-100 " : style}>
        <td className="px-6 py-4 text-center">{seatId}</td>
        <td className="px-6 py-4 text-center">${price}</td>
        <td className="px-6 py-4 text-center">
          <p>{moment(startDate).format("L")}</p>
        </td>

        <td className="px-6 py-4 text-center">
          <button
            onClick={handleOpen}
            className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900 focus:outline-none"
          >
            Update
          </button>
        </td>
        <td className="px-6 py-4 text-center">
          <button
            onClick={() => {
              handleCancel();
            }}
            className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 focus:outline-none"
          >
            Cancel
          </button>
        </td>
      </tr>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Change the date as your wish</DialogHeader>
        <DialogBody>
          <p className="flex flex-col text-lg">
            <span>Your Current Booking Date is</span>
            <span>{moment(bookedDate).format("MMM Do YYYY")}</span>
          </p>

          <div className=" flex justify-center mx-auto">
            <ReactDatePicker
              minDate={new Date()}
              showIcon
              className="rounded-lg border-[1px] flex items-center border-blue-500"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
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
          <Button variant="gradient" color="green" onClick={handleUpdate}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default BookItem;
