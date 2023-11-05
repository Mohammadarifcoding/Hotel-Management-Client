import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const RoomsPic = ({ data }) => {
  const { img ,priceRange } = data;
  return (
    <>
      <div className="min-w-[300px] full h-full relative">
       
        {img ? (
          <img className="w-full h-full" src={img} alt="Room Image" />
          
        ) : (
          <Skeleton width={300} height={400} /> // You may need to adjust the dimensions
        )}
        <div className="overlay">
          <p className="   hover:bg-[#2c699e] p-3 bg-[#1E88E5] text-white text-center transition-opacity hover:opacity-100">
            Price : {priceRange}
          </p>
          <Link className="btn border-none absolute bottom-[38%] right-[38%] bg-[#1E88E5] hover:bg-[#2c699e] text-white transition-opacity hover:opacity-100">
            Details

           
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomsPic;
