"use client";

import Chevron from "@/icons/settings-icons/chevron";
import BooksPicture from "../../../../public/BooksPicture.png";
import Play from "@/icons/audio-books/play-icon";
import Review from "@/icons/audio-books/review";
import Star from "@/icons/audio-books/star";
import { motion } from "framer-motion";
import Image from "next/image";

const BookAudio = () => {
  return (
    <div>
      <div className="h-[320px] bg-Grandis w-full relative -z-40">
        <div className="w-full flex pt-5">
          <div className="rotate-180 translate-x-4">
            <Chevron width={30} height={30} />
          </div>
          <div className="mx-auto">
            <span className="font-mono text-[20px] font-bold">
              princess and the goblin
            </span>
          </div>
        </div>
        <div className="bg-white h-[90px] rounded-t-[50%] absolute bottom-0 w-full"></div>
      </div>
      <motion.div
        initial={{ marginTop: "-280px", opacity: 0 }}
        animate={{ marginTop: "-240px", opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="-mt-[240px] z-50 relative"
      >
        <Image src={BooksPicture} alt="books-pic" className="mx-auto" />
        {/* player */}
        <div className="border-[1px] -bottom-[13px] border-gray-400 bg-white w-fit p-6 rounded-[50%] absolute right-14 opacity-90">
          <Play width={25} height={25} />
        </div>
      </motion.div>
      <div className="mt-8 px-4">
        <h4 className="text-[25px] font-bold">princess and the goblin</h4>
        <div className="text-Chino mt-4">
          <span>by: jamilla francis</span>
          <span className="ml-6">1:45:00</span>
        </div>
        <div className="flex mt-5">
          <div className="flex">
            <Review />
            <span className="ml-1">23 reviews</span>
          </div>
          <div className="flex ml-8">
            <Star />
            <span className="ml-1">4.5</span>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="px-4 mt-5 text-[18px]">
        sara is a little girl who living with her mom. she loves animals. one
        day when shes playing with her imaginary friend....
      </div>
      <div className="flex mt-4">
        {" "}
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          science
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          history
        </div>
      </div>
      <div className="flex justify-around mt-32">
        <button className="bg-Tenne border-[2px] w-[112px] mt-4 -translate-y-2 h-[36px]  rounded-bl-xl rounded-tr-xl text-white ">
          listen
        </button>
        <button className="border-Tenne border-[2px] w-[112px] mt-4 -translate-y-2 h-[36px]  rounded-bl-xl rounded-tr-xl text-Tenne ">
          save
        </button>
      </div>
    </div>
  );
};

export default BookAudio;
