import React from 'react';
import { FaStar } from 'react-icons/fa';
import UseAxious from '../../../Hooks/UseAxious';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

const DisplayReviews = ({roomID}) => {
    const AxiousSecure = UseAxious()
    const uri = `/getReviews/${roomID}`
    console.log(uri)
   

    const getReviews = ()=>{
        const res = AxiousSecure.get(uri)
        return res
    }

    const { data:Reviews, isLoading , isError , error } = useQuery({
        queryKey: [`reviewsData${roomID}`],
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

      
 
    return (
        <div className="mt-4 p-4 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
  
        {Reviews.data.map((review, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`text-${
                    star <= review.rating ? "yellow" : "gray"
                  }-500`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold mb-2">{review.name}</p>
            <p className=" text-gray-700  mb-4">{moment(review.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    );
};

export default DisplayReviews;