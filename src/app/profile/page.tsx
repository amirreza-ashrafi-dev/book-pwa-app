"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Pic1 from "../../../public/Profile.png";
import Remaining1 from "../../../public/remaining1.png";
import Remaining2 from "../../../public/remaining23.png";
import Remaining3 from "../../../public/remaining24.png";
import Remaining4 from "../../../public/remaining4.png";
import Star from "../../../public/Star.png";

const Profile = () => (
  <div>
    <motion.div
      initial={{ marginTop: "-1000px" }}
      animate={{ marginTop: "0" }}
      transition={{ duration: 0.75 }}
      className="bg-Grandis pt-4 h-52 rounded-b-[60%]"
    >
      <div className="flex justify-center mt-3 text-[20px]">
        <span>Profile</span>
      </div>
    </motion.div>
    <motion.div className="w-fit mx-auto mt-[-99px] flex flex-col  items-center">
      <Image alt="profile-picture" src={Pic1} />
      <span className="font-mono text-[19px] font-bold">Hello alex</span>
    </motion.div>
    <div className="flex justify-between px-1 mt-10">
      <div className="flex flex-col px-2 text-[14px] items-center border-r-[1px] pr-4 justify-center h-[70px] border-Chino">
        <span className="font-bold text-[17px]">95</span>
        <span className="text-Chino text-center mt-1">books you read</span>
      </div>
      <div className="flex flex-col px-2 text-[14px] justify-center items-center border-r-[1px] pr-4 border-Chino">
        <span className="font-bold text-[17px]">12</span>
        <span className="text-Chino text-center mt-1">books you saved</span>
      </div>
      <div className="flex flex-col px-2 text-[14px] items-center justify-center pr-4">
        <span className="font-bold text-[17px]">2500</span>
        <span className="text-Chino text-center mt-1">coins you earned</span>
      </div>
    </div>

    {/* library */}
    <div className="mt-5 pl-2">
      <span className="ml-5 text-[20px] font-mono font-bold">library</span>
      <div className="mt-5 bg-[#ebebeb] pt-6 mx-3 rounded-lg flex flex-col">
        {/* image section */}
        <div className="flex">
          <div className="relative h-28  ml-8 pl-2">
            <Image
              src={Remaining1}
              alt="remaining-image"
              className="absoluste top-0 rotate-[20deg] translate-x-[12px]"
            />
            <Image
              src={Remaining2}
              alt="remaining-image2"
              className="absolute top-0 -rotate-[20deg] -translate-x-[13px]"
            />
            <Image
              src={Remaining3}
              alt="remaining-image3"
              className="absolute top-0"
            />
          </div>
          <div className="flex flex-col ml-10 mt-4">
            <span className="text-[13px] font-bold">
              you have 35 books to read
            </span>
            <span className="text-[10px]"> MORE BOOKS MORE COINS !</span>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button className="bg-Tenne small:w-[112px] -mt-6 mr-4 mb-2 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
            read
          </button>
        </div>
      </div>
    </div>
    {/* remaining */}
    <div className="mt-4">
      <div>
        <span className="font-bold  text-[19px] ml-5">recommended</span>
        <div className="flex mt-2 flex-col pt-4 bg-[#ebebeb] mx-3 rounded-xl px-3">
          <div className="flex">
            <Image
              alt="recommended"
              className="mr-4"
              src={Remaining4}
              width={140}
            />
            <div className="flex flex-col font-mono">
              <div className="flex items-center justify-between">
                <span className="font-bold iphoneXR:text-[23px] iphoneSE:text-[16px] ">
                  song of the sea
                </span>
                <div className="flex items-center mr-3">
                  <Image alt="star" src={Star} className="w-[15px] h-[16px]" />
                  <span className="ml-2">4.5</span>
                </div>
              </div>
              <span className="text-Chino">by: jamila francis</span>
              <span className="text-Chino">science</span>
              <span className="text-[13px]">
                you ve read 75% of this book. do you want to continue?
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-Tenne small:w-[112px] mt-2 mr-3 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
              read
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
