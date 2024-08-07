import { motion } from "framer-motion";
import React from "react";
import {AuroraBackground} from "./ui/aurora-background"
import {TypewriterEffect} from "./ui/typewriter-effect"

// Get Treated Like A King With Our Professional Staff 

const Hero = () => {
    const words = [
        {
          text: "Get",
        },
        {
          text: "Treated",
        },
        {
          text: "A ",
        },
        {
            text: "King",
        },
        {
          text: "With",
        },
        {
            text: "Our",
        },
        {
          text: "Professional",
          className: "dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r to-yellow-400 from-amber-600",
        },
        {
            text: "Staffs.",
            className: "dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r to-yellow-400 from-amber-600",
        }
      ];

    return(
        <main id="#home" className="w-full item-center flex flex-col item-center">
            <AuroraBackground className="flex item-center h-[48vh] md:h-[100vh]">
                <img  src="./new.png" className="size-[220px] md:size-[300px] lg:size-[340px] "/>
                <div className="flex  flex-col flex-1 item-center justify-center md:mt-[-160px]  mt-[-40px] ">
                        <TypewriterEffect words={words} className="md:w-[800px]  text-center item-center text-[30px]   " />
                        <h3 className=" text-gray-600 w-full text-sm  md:text-[27px] md:mt-[15px] mt-[2px] text-center ">    
                           Where Men Get The Best Look
                        </h3>
                </div>

                <button className="md:p-3 p-2 text-bold rounded-md  bg-yellow-400 md:absolute md:bottom-10 md:right-10 text-bold border border-1 border-amber-500 mb-[40px] md:mb-0">Get Connected</button>
            </AuroraBackground>
        </main>
    )
}

export default Hero ;