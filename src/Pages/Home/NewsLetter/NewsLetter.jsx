import React from "react";
import { Input, Button } from "@material-tailwind/react";
const NewsLetter = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="bg-[url('/bg-newLetter.jpg')] bg-cover bg-center bg-fixed w-full min-h-[60vh] mt-10">
      <div className="backdrop-brightness-[0.3] justify-center flex flex-col min-h-[60vh] w-full h-full">
        <h2 className=" lg:text-5xl text-4xl font-semibold text-white text-center pt-10">
          {" "}
          Subscribe to <span className="text-[#1E88E5]">Our</span> NewsLetter
        </h2>
        <p className="text-white text-center mt-5">Get the latest  offers fast</p>
        <div className="relative flex w-full max-w-[24rem] mx-auto mt-10">
          <Input
            type="email"
            label="Email Address"
            value={email}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            onChange={onChange}
            className="pr-20 text-white  "
            containerProps={{
              className: "min-w-0 text-white",
            }}
          />
          <Button
            size="sm"
            color={email ? "white" : "white"}
            disabled={!email}
            className={`!absolute text-white ${email ? 'bg-[#1E88E5]' : 'bg-[#286aa3]'} right-1 top-1 rounded`}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
