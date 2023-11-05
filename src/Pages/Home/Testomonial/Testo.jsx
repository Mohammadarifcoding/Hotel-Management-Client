
import { Rating } from "@material-tailwind/react";
import React from "react";



const Testo = ({ data }) => {
  const { img, name, review ,rating } = data;
  return (
    <div className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl bg-[#1E88E5]">
      <div className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
        <div className="  items-center justify-center flex py-2">
          <div className="flex flex-col  items-center justify-center ">
            <div className="flex items-center">
              <div className="p-1 bg-white rounded-full">
                <img src={img} alt className="rounded-full" />
              </div>
              <div>
                <div className="font-bold text-stone-500 mx-4">{name}</div>
                
                <Rating value={rating} readonly></Rating>
              </div>
            </div>
            <div className="text-stone-400  m-2 px-8"> {review}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testo;
