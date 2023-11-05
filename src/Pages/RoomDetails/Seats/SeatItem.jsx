import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SeatItem = ({data, style , num}) => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(data)
    return (
        <tr className={ num % 2 ? style : ''}>
        <td className="px-4 py-2 text-center">Room {data.seatId}</td>
        <td className="px-4 py-2 text-center">{data.available ? (
            <p>
              <span className="px-[10px] py-[1px] rounded-full mr-3 bg-[#1E88E5] "></span>{" "}
              Available
            </p>
          ) : (
            <p>
              <span className="px-[10px] py-[1px] rounded-full mr-3 bg-red-500 "></span>{" "}
              NotAvailable
            </p>
          )}</td>
        <td className="px-4 py-2 text-center">${data.price}</td>
        <td className="px-4 py-2 text-center"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></td>
        <td className="px-4 py-2 text-center"><button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 text-center rounded">Book Now</button></td>
    </tr>
    );
};

export default SeatItem;