import React from "react";
import Testo from "./Testo";



const Testomonial = () => {
  const data = [
    {
      img: "https://source.unsplash.com/100x100/?man,boy",
      name: "John Doe",
      rating:3,
      review: `Exceptional stay! Impeccable service, luxurious amenities, and breathtaking views. A perfect escape.`,
    },
    {
      img: "https://source.unsplash.com/100x100/?girl",
      name: "Elina Gilbert",
      rating:4,
      review: ` Outstanding hotel! The staff's warmth, attention to detail, and culinary delights made our stay unforgettable.`,
    },
    {
      img: "https://source.unsplash.com/100x100/?boy",
      name: "Josh Reacher",
      rating:5,
      review: `A hidden gem! Tranquil ambiance, top-notch facilities, and the spa...pure bliss. Can't wait to return!`,
    },
  ];
 
  return (
    <div className="flex justify-center  p-4">
      <div className="flex flex-col justify-center items-center ">
        <div className=" text-2xl md:text-5xl font-medium flex my-6">
          <div>Testimonials By </div>
          <div className="text-cyan-400 mx-1"> Customer</div>
        </div>
        <div className="flex mt-6 flex-col md:flex-row max-w-7xl justify-center items-center ">
           
         {
            data.map(value => <Testo data={value} key={value.name}></Testo>)
         }
      


        </div>
      </div>
    </div>
  );
};

export default Testomonial;
