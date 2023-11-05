import React from 'react';

const Offer = () => {
    return (
        <div className=" flex lg:flex-row flex-col max-w-7xl mt-10  justify-center items-center gap-10" >
            <div className='flex flex-col lg:justify-start justify-center'>
                    
                    <h1 className='lg:text-6xl lg:text-start text-center md:text-5xl text-4xl max-w-lg '>Book Online Hotels to Get 20% OFF</h1>
                    <button className='btn bg-[#1E88E5] w-[130px]    mx-auto  hover:bg-[#0c5492] text-white mt-4'>Book Now</button>
            </div>
            <div className=''>
               <img src="/girloffer.png" alt="" />
            </div>
        </div>
    );
};

export default Offer;