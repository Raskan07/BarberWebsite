"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { service_data } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import {Info} from "../components/Info"
import FeedBack from "./FeedBack";
import Footer from "./Footer"


export function Service() {
  const list = [
    "https://cdn.pixabay.com/photo/2016/06/12/21/41/barber-1453064_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/14/12/37/barber-5194406_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/07/15/21/00/sign-2507732_960_720.jpg",
  ];
  return (
    <div className="w-full h-[100vh]  ">
      <ImagesSlider className="h-[40rem] stciky top-0" images={list}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            What we do
          </motion.p>
          <div className="item-center text-center ">
            <h2 className="text-[66px] font-bold capitalize ">Services</h2>

            <p className="text-center md:w-[40vw] text-lg p-2 md:p-0 ">
              You can count on getting exceptional services from one of our
              friendly and skillful professionals at Vogue Men’s Salon that
              include: Hair Style Shaving
            </p>
          </div>
        </motion.div>
      </ImagesSlider>

      <div className="grid md:grid-cols-3 p-2 md:mt-[30px] mt-[15px] gap-3">
        {service_data.map((item) => (
          <CardContainer className="m-5 md:w-[30vw] items-center justify-center flex  ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item?.serviceName}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item?.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img src={item?.image} className="size-[360px] rounded-md" />
              </CardItem>

              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  See more →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-yellow-400 dark:bg-yellow-400 dark:text-black text-white text-xs font-bold"
                >
                  Book Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* FeedBack from Our Customer */}
      <FeedBack />
      <Footer />

    </div>
  );
}
