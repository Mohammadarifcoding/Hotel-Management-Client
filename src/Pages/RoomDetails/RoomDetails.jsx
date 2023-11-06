import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import UseAxious from "../../Hooks/UseAxious";
import Skeleton from "react-loading-skeleton";
import Seats from "./Seats/Seats";

const RoomDetails = () => {
  const AxiousSecure = UseAxious();
  const loadedData = useLoaderData()
  const {
    roomId,
    img,
    description,
    roomSize,
    roomImages,
    availability,
    priceRange,
  } = useLoaderData();
  const [seat, setSeats] = useState([]);
  const uri = `seats/${roomId}`;
  useEffect(() => {
    AxiousSecure.get(uri).then((res) => {
      setSeats(res.data);
    });
  }, [uri]);
  const seatAvailable = seat.filter(item => item.available == true    )
  return (
    <>
    
    
    <div className="my-10 lg:flex-row flex items-center gap-10 flex-col justify-center">
      <div className="flex justify-center  gap-2 flex-col items-center">
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

      <div className="flex flex-col lg:justify-start justify-center">
        <h2 className="lg:text-4xl font-semibold text-3xl lg:text-start text-center max-w-md">
          We are <span className="text-[#1E88E5]">here</span> to Offer
        </h2>
        <p className="lg:text-xl mt-4 font-medium md:text-lg lg:text-start text-center">
          {description}
        </p>
        <p className="mt-3 lg:text-start text-center font-medium">
          Price <span className="text-[#1E88E5]">Per</span> Night : $
          {priceRange} - ${priceRange + 300}
        </p>
        <p className="mt-3 lg:text-start text-center font-medium">
          Room <span className="text-[#1E88E5]">Size</span> : {roomSize}
        </p>
        <p className="mt-4 lg:text-start text-center font-medium">
          {seatAvailable.length ? (
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
        </p>
      </div>
    </div>
    <Seats loadedData={loadedData} data={seat}></Seats>
</>
  );
};

export default RoomDetails;