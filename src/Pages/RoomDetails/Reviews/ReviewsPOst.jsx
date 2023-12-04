import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa"; 
import UseAxious from "../../../Hooks/UseAxious";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ReviewsPOst = ({roomID}) => {
    const [userRating, setUserRating] = useState(0);
    const [userReview, setUserReview] = useState("");
    const { user } = useContext(AuthContext)
    const [AcessPost,setAcessPost] = useState(false)
  
    const handleRatingChange = (rating) => {
      setUserRating(rating);
    };
  
    const handleReviewChange = (e) => {
      setUserReview(e.target.value);
    };

   const AxiousSecure = UseAxious()
   const GetPersonalBookingData = ()=>{
    const res = AxiousSecure.get(`/getBookingByEmailId?email=${user?.email}&roomId=${roomID}`)
    return res
   }

   const { data:personalBooking, isLoading , isError , error } = useQuery({
    queryKey: ['personalBookedData',user],
    queryFn: GetPersonalBookingData
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
  
   const date = new Date()
  console.log(personalBooking.data)
    const handlePostReview = ()=>{
     const reviewData = { roomID : roomID.toString() , review: userReview ,date ,rating : userRating, name:user.displayName   }
        AxiousSecure.post('/postReview',reviewData)
        .then(res => {
            console.log(res.data)
            Swal.fire({
                title: "Thank You",
                text: "We are happy to get the review",
                icon: "success"
              });
              setUserRating(0)
              setUserReview('')
              location.reload()
        })
    }



    return (
       <>
   <div className="mt-4 p-4 border-t border-gray-200">
      <h2 className="text-3xl font-semibold mb-8 text-center ">We want to know <span className="text-blue-500"> your</span> feelings</h2>

      <div className="flex items-center space-x-4 mb-4">
        <span className="text-xl font-medium">Your Rating:</span>
        <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-${
                star <= userRating ? "yellow" : "gray"
              }-500 cursor-pointer text-xl`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
      </div>
     
      <textarea
        className="border p-2 rounded-md block border-blue-500 focus:border focus:outline-blue-500 max-w-xl w-full"
        placeholder="Write your review here..."
        value={userReview}
        onChange={handleReviewChange}
        
      />
        {
            personalBooking.data.length ? <>
            <button
      
      onClick={handlePostReview}
        className={` bg-blue-500 btn text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 cursor-pointer `}
        
      >
        Post Review
      </button>

            </>:<>
            <button
      disabled
      onClick={handlePostReview}
        className={` bg-blue-500 btn text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 cursor-pointer `}
        
      >
        Post Review
      </button></> }
        
      
     </div>
       </>
    );
};

export default ReviewsPOst;