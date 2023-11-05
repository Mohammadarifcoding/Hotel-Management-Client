const Parrlax = ({img , text, description , svg}) => {
  return (
    <div className={` w-full  bg-[url('${img}')] bg-cover bg-center bg-fixed min-h-screen `}>
      <div className="min-h-screen w-full backdrop-brightness-[0.3] flex lg:flex-row flex-col justify-center bg-cover bg-center bg-fixed  items-center">
       <div className="mt-16 ">
       <h2 className="text-white lg:text-5xl max-w-lg leading-10 lg:text-start text-center text-3xl drop-shadow-xl font-bold  shadow-blue-500">
         {text}
        </h2>
        <p className=" text-white max-w-xl mt-4 lg:text-start text-center">
          {description}
        </p>
       </div>

       <div className="">
        <img src={svg} alt="" />
       </div>
        
      </div>
    </div>
  );
};

export default Parrlax;
