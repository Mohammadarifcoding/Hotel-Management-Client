import React from 'react';

const Offer = () => {
    return (
        <div className=" flex lg:flex-row flex-col max-w-7xl mt-10  justify-center items-center gap-10 mx-auto" >
            <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" 
     data-aos-duration="1000" className='flex flex-col lg:justify-start justify-center'>
                    
                    <h1 className='lg:text-6xl  text-center md:text-5xl text-4xl max-w-lg font-semibold ' >Book Online Hotels to <span className='text-[#1E88E5]'>Get 20% </span>OFF</h1>
                    <button className='btn bg-[#1E88E5] w-[130px]    mx-auto  hover:bg-[#0c5492] text-white mt-4'>Book Now</button>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in" className=''>
               <img src="/girloffer.png" alt="" />
            </div>
        </div>
    );
};

export default Offer;