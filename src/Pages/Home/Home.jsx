import Contact from "./Contact/Contact";
import NewsLetter from "./NewsLetter/NewsLetter";
import Offer from "./Offer/Offer";
import Parrlax from "./Parralax/Parrlax";
import Testomonial from "./Testomonial/Testomonial";

const Home = () => {
  return (
    <div className="">
      <div
        className={`w-full  bg-[url("https://i.ibb.co/0qQxFQ1/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg")] bg-cover bg-center bg-fixed min-h-screen `}
      >
        <div className="min-h-screen  justify-between flex lg:flex-row flex-col  bg-cover bg-center z-10 backdrop-brightness-50 bg-fixed  items-center">
          <div className=" mx-auto p-4 flex lg:flex-row flex-col justify-center items-center">
            <div className="mt-16 ">
              <h2 className="text-white lg:text-5xl max-w-lg leading-10 lg:text-start text-center text-3xl drop-shadow-xl font-bold  shadow-blue-500">
                {" Your Ultimate Hotel Management Solution"}
              </h2>
              <p className=" text-white max-w-xl mt-4 lg:text-start text-center">
                {`Optimize your hotel operations with our all-in-one hotel management
          platform. Efficiency, guest satisfaction, and success, all in one
          place`}
              </p>
            </div>

            <div className="">
              <img
                src={
                  "https://i.ibb.co/8bQwkn0/hotel-building-tropical-country-with-palms-cartoon-icon-1284-63176-removebg-preview.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={` w-full  bg-[url("https://i.ibb.co/dDBRjrf/point3d-commercial-imaging-ltd-Swg04-CP0b-U-unsplash.jpg")] bg-cover bg-center bg-fixed min-h-screen `}
      >
        <div className="min-h-screen w-full gap-10 p-4 backdrop-brightness-[0.3] flex lg:flex-row-reverse flex-col justify-center bg-cover bg-center bg-fixed  items-center">
          <div className="mt-16 ">
            <h2 className="text-white lg:text-5xl max-w-lg leading-10 lg:text-start text-center text-3xl drop-shadow-xl font-bold  shadow-blue-500">
              {" Your Ultimate Hotel Management Solution"}
            </h2>
            <p className=" text-white max-w-xl mt-4 lg:text-start text-center">
              {`Optimize your hotel operations with our all-in-one hotel management
          platform. Efficiency, guest satisfaction, and success, all in one
          place`}
            </p>
          </div>

          <div>
            <h1>Video Player</h1>
            <video controls width="600" height="400" poster="/bg-newLetter.jpg" loading='lazy'>
              <source src="/vidd.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Testomonial></Testomonial>
      <Offer></Offer>
      <NewsLetter></NewsLetter>
      <Contact></Contact>
    </div>
  );
};

export default Home;
