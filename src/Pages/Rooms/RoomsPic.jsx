import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import UseAxious from "../../Hooks/UseAxious";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@material-tailwind/react";

const RoomsPic = ({ data }) => {
  const AxiousSecure = UseAxious()
  const {
    _id,
    roomId,
    img,
    description,
    roomSize,
    roomImages,
    seats,
    availability,
    priceRange
  } = data;
  console.log(data)

   const uri = `/perReviews/${roomId}`

   const getReviews = ()=>{
    const res = AxiousSecure.get(uri)
    return res
}

const { data:Reviews, isLoading , isError , error } = useQuery({
    queryKey: [`SingleReviewsData${roomId+1}`],
    queryFn: getReviews
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
  if(isError){
    return <p>error</p>
  }

  let averageRating = 0
   
  for(let value of Reviews.data){
    console.log(value)
    averageRating = averageRating + value.rating
    console.log(averageRating)
  }
  averageRating = Math.floor(averageRating / Reviews?.data?.length)
  console.log('Review Data ',Reviews?.data)
  console.log('Review rating average ',averageRating)
  console.log('legnth',Reviews?.data.length)

  return (
    <>
      {/* <div className="min-w-[300px] full h-full relative">
       
        {img ? (
          <img className="w-full h-full" src={img} alt="Room Image" />
          
        ) : (
          <Skeleton width={300} height={400} /> // You may need to adjust the dimensions
        )}
        <div className="overlay">
          <p className="   hover:bg-[#2c699e] p-3 bg-[#1E88E5] text-white text-center transition-opacity hover:opacity-100">
            Price : {priceRange} - {priceRange + 300}
          </p>
          <Link to={`/roomDetails/${_id}`} className="btn border-none absolute bottom-[38%] right-[38%] bg-[#1E88E5] hover:bg-[#2c699e] text-white transition-opacity hover:opacity-100">
            Details

           
          </Link>
        </div>
      </div> */}

      <div className="max-w-[700px] w-full  h-full relative p-5 bg-white border-gray-400 border-[4px] rounded-3xl shadow-2xl ouline-gray-600 mx-auto">
          <div className="relative w-full max-h-[300px] overflow-hidden rounded-2xl border-gray-200 border-2">
                 <img className="w-full" src={img} alt="" />
          </div>
          <div className="relative md:bottom-10 w-full flex justify-around">
             <img className="w-[32%] md:max-w-[150px]  rounded-2xl border-gray-300 border-[4px] shadow-xl" src={roomImages[0]} alt="" />
             <img className="w-[32%] md:max-w-[150px]  rounded-2xl border-gray-300 border-[4px] shadow-xl" src={img} alt="" />
             <img className="w-[32%] md:max-w-[150px]  rounded-2xl border-gray-300 border-[4px] shadow-xl" src={roomImages[1]} alt="" />
          </div>
          <p className="text-blue-500 lg:text-3xl sm:text-2xl text-xl text-center font-bold">We Offer you</p>
          <p className="lg:text-xl text-center my-3">Price <span className="text-blue-500">Range</span> :${priceRange} - ${priceRange+300}</p>
          <div className="mx-auto flex justify-center mt-4 mb-6 items-center">
          <Rating className=" "  value={averageRating} readonly></Rating> <span className="text-lg"> ({Reviews?.data?.length})</span>
          
          </div>
          <Link to={`/roomDetails/${_id}`} className="btn flex justify-center mx-auto max-w-[140px] border-none  bg-[#1E88E5] hover:bg-[#2c699e] text-white  ">
            Details

           
          </Link>
      </div>
    </>
  );
};

export default RoomsPic;
