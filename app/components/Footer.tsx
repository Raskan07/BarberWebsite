"use client"

import { BackgroundBeams } from "./ui/background-beams";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import axios from 'axios';

const Footer = () => {

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    console.log("start")
    await fetch("/api/emails",{method:"POST"})

    console.log("end")
  };
  
  return (
    <div  id="contact" className="h-[40rem] w-full mt-[40px] rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className=" w-[90%] grid grid-cols-3 item-center justify-center">
        {/* About */}

        {/* logo */}
        <div className="p-2 bg-red-30">
          <img src="./new.png" className="size-[300px]" />
          <p className="w-[20vw] capitalize text-gray-300 text-center mt-[-30px]">
            Get ready for an unparalleled grooming experience with Vogue Men’s
            Salon and book your appointment now.
          </p>
        </div>

        {/* info */}
        <div className=" mr-[60px] item-center justify-center h-[40vh] grid mt-[70px]">
          <div className="flex flex-row gap-5 item-center pt-2">
            <EmailIcon className="size-[30px] text-yellow-400" />
            <p className="text-white font-semibold text-[22px] text-gray-400 ">
              raskanr.j07@gamil.com
            </p>
          </div>
          <div className="flex flex-row gap-5 item-center pt-2">
            <CallIcon className="size-[30px] text-yellow-400" />
            <p className="text-white font-semibold text-[22px] text-gray-400 ">
              +94 742920155
            </p>
          </div>
          <div className="flex flex-row gap-5 item-center pt-2">
            <LocationOnIcon className="size-[30px] text-yellow-400" />
            <p className="text-white font-semibold text-[22px] text-gray-400">
              Century marina hotel
            </p>
          </div>
          <div className="flex flex-row gap-5 item-center pt-2">
            <AccessTimeIcon className="size-[30px] text-yellow-400" />
            <p className="text-white font-semibold text-[22px] text-gray-400 ">
              Everyday 10 a.m. – 10 p.m
            </p>
          </div>
        </div>
        <div className="p-2 bg-red-30">
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Service you want
              </label>
              <textarea
                id="Service"
                className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Hair cut "
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Pick a Date
              </label>
              <input
                type="date"
                className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 relative h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-700 relative hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="p-2 w-full  bottom-0 absolute item-center">
        <p className="text-gray-500 font-light p-2"> © Copyright 2024 - raskan</p>

      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Footer;
