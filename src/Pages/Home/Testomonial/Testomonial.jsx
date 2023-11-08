import React from "react";
import Testo from "./Testo";
import AwesomeSlider from "react-awesome-slider";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import UseAxious from './../../../Hooks/UseAxious';
import { useQuery } from '@tanstack/react-query';

const Testomonial = () => {
  

  const AxiousSecure = UseAxious()

  const getTheReiviews = ()=>{
    const res = AxiousSecure.get('/reviews')
    return res
  }
 
  const random = Math.floor(Math.random * 9)
   const {data:AllReviews, isLoading , isError , error} = useQuery({
    queryKey:['allReviews',random],
    queryFn:getTheReiviews
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
    <div  className="flex justify-center  p-4">
      <div className="flex flex-col justify-center items-center ">
        <h2 className=" md:text-5xl text-3xl font-semibold text-center">
          Testimonials By
          <span className="text-[#1E88E5] ">  Customer</span>
        </h2>
        <Carousel data-aos-duration="1000" data-aos="flip-up" className="rounded-xl min-h-[500px] mt-10 shadow-2xl lg:min-w-[500px] min-w-[30vw] lg:max-w-[700px] h-full max-w-[350px]">
        {AllReviews.data.map((value) => (
            <Testo data={value} key={value.name}></Testo>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testomonial;
