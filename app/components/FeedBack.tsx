import React from 'react'
import {TypewriterEffect} from "./ui/typewriter-effect"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {feedbackData} from "@/data"


function FeedBack() {
    const words = [
        {
          text: "Remember",
        },
        {
          text: "it’s",
        },
        {
          text: "not ",
        },
        {
            text: "just",
        },
        {
          text: "a",
        },
        {
            text: "haircut,",
        },
        {
            text: "it’s,",
        },
        {
            text: "an,",
        },
        {
          text: "experience.",
          className: "dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r to-yellow-400 from-amber-600",
        },
      ];
  return (
    <div className="w-full">

      {/* header  */}
      <div className="w-full flex flex-1 item-center justify-center mt-[50px] h-[38vh]">
      <TypewriterEffect words={words} className="md:w-[800px]  text-center item-center text-[30px]   " />      </div>
      {/* infinte image scroll */}

      <div className="w-[100%] flex item-center mt-24 justify-center">
      <InfiniteMovingCards
        className="mb-10"
        items={feedbackData}
        direction="right"
        speed="slow"
      />
      </div>

    </div>
  )
}

export default FeedBack
