import { Button, Rating, Typography } from "@material-tailwind/react";
import React from "react";
import moment from "moment"
const Testo = ({ data, index }) => {
  const {name , rating , date, review} = data 

  const mainDate = moment(date).format('MMMM Do YYYY, h:mm:ss a')
  return (
    <div className="relative min-h-[500px] shadow-2xl lg:min-w-[500px] min-w-[30vw] lg:max-w-[700px] h-full max-w-[350px] w-full">
        
        <div className="absolute mx-auto inset-0 grid h-full w-full place-items-center bg-blue-700 text-white">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
     
              className="mb-1 text-2xl text-center  md:text-3xl lg:text-4xl"
            >
              {name}
             
            </Typography>
            <Rating className="mb-6 mx-auto"  value={rating} readonly></Rating>
            <Typography
              variant="lead"
          
              className="mb-12 text-center opacity-80"
            >
             {review}
            </Typography>
            
            <p className="mt-5">{mainDate}</p>
          </div>
        </div>
      </div>
  );
};

export default Testo;
