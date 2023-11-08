import React from "react";
import { Tab, Tabs } from "../TermsTab/TermsTab";

const ProcessTerms = () => {
  return (
    <Tabs>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around shadow-[#222242] bg-[#222242] shadow-2xl flex-col">
            <div className="lg:w-[50%] w-full">
              <h2 className="sm:text-4xl text-3xl xl:max-w-[200px] font-bold">
                Create An Account
              </h2>
              <p className="mt-3">
                First you need have account for login then you can see the rooms
                , we make sign up easy and this basic , same like you make
                account social media . and dont worry all details is safe , we
                not share your details to others.
              </p>
            </div>
            <img
              className="lg:w-[50%] rounded-lg w-full"
              src="https://i.ibb.co/sjQ5tDx/Screenshot-866.png"
              alt="Image 1"
            />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-800 text-white">
            1
          </p>
          <p className="md:text-lg sm:text-base text-sm">Create Account</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-4 p-7 text-white rounded-xl  xl:flex-row justify-around shadow-[#222242] bg-[#222242] shadow-2xl flex-col">
            <div>
              <h2 className="sm:text-4xl text-3xl xl:max-w-[400px] font-bold">
                Select the best room
              </h2>
              <p className="mt-3">
                Second you need to select the best room best room for you. Also
                you can filter by price. So, that it can suits your budget. And
                you will get same as the picture in real life in minimul price .
              </p>
            </div>
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/nc47MT3/Screenshot-867.png"
              alt="Image 1"
            />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-800 text-white">
            2
          </p>
          <p className="md:text-lg ">Select The Room</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-8 p-7 text-white rounded-xl  justify-around shadow-[#222242] bg-[#222242] shadow-2xl flex-col">
            <div className="flex gap-4 xl:flex-row flex-col">
              <div className="">
                <h2 className="sm:text-4xl text-3xl xl:max-w-[250px] font-bold">
                  Book The Seat
                </h2>
                <p className="mt-3">
                  There are multiple seats in a room . So, you can choose the
                  seat that you want to book. And also you can choose the date
                  that you want.
                </p>
              </div>
              <img
                src="https://i.ibb.co/CpyDpdF/Screenshot-868.png"
                alt="Image 1"
              />
            </div>
            <img src="https://i.ibb.co/4F1s5Cf/Screenshot-869.png" alt="" />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-800 text-white">
            3
          </p>
          <p className="md:text-lg ">Book the Seat</p>
        </div>
      </Tab>
      <Tab
        component={
          <div className="flex gap-4 p-7 flex-col text-white rounded-xl   justify-around shadow-[#222242] bg-[#222242] shadow-2xl ">
            <div className="flex lg:flex-row flex-col">
              <div className="">
                <h2 className="sm:text-4xl text-3xl xl:max-w-[250px] font-bold">
                  See your Booking list
                </h2>
                <p className="mt-3">
                  After booking the seat in the date then you can see them in
                  the my booking section. And you can cancel your booking form
                  here.
                </p>
              </div>
              <img
                className="rounded-xl"
                src="https://i.ibb.co/djkJ7SK/Screenshot-876.png"
                alt="Image 1"
              />
            </div>

            <img className="rounded-xl" src="https://i.ibb.co/m85bsyv/Screenshot-878.png" alt="" />
          </div>
        }
      >
        <div className="flex justify-start items-center gap-3">
          <p className="md:px-5 px-3 py-1 md:py-3 font-bold rounded-full bg-blue-800 text-white">
            4
          </p>
          <p className="md:text-lg ">Order History</p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default ProcessTerms;
