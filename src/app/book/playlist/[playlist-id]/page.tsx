"use client";

import Chevron from "@/icons/settings-icons/chevron";
import BooksPicture from "../../../../../public/BooksPicture.png";
import Play from "@/icons/audio-books/play-icon";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BookAudio = () => {
  const Router = useRouter();
  return (
    <div>
      <div className="h-[250px] bg-Grandis w-full relative">
        <div className="w-full flex pt-5">
          <div
            className="rotate-180 translate-x-4"
            onClick={() => Router.back()}
          >
            <Chevron width={30} height={30} />
          </div>
          <div className="mx-auto ">
            <span className="font-mono text-[20px] font-bold">
              princess and the goblin
            </span>
          </div>
        </div>
        <div className="bg-white h-[90px] rounded-t-[50%] absolute bottom-0 w-full"></div>
      </div>
      <motion.div
        initial={{ marginTop: "-200px", opacity: 0 }}
        animate={{ marginTop: "-140px", opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="-mt-[240px] z-50 relative"
      >
        <Image
          src={BooksPicture}
          alt="books-pic"
          className=" ml-7"
          width={110}
        />
      </motion.div>
      <div className="mt-8 px-5">
        <div className="flex justify-between">
          <h4 className="text-[20px] font-bold">princess and the goblin</h4>
          <h4 className="text-[20px] font-bold">1:34:00</h4>
        </div>
        <div className="text-Chino mt-2">
          <span>by: jamilla francis</span>
        </div>
      </div>
      {/* play list */}
      <div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">1.chapter one</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">2.chapter two</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">3.chapter three</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">4.chapter four</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">5.chapter five</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
        <div className="px-3 mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-[1px] mr-2 border-gray-400 w-fit p-4 rounded-[50%]">
              <Link href={"/book/read/10?type=audio"}>
                <Play width={17} height={17} />
              </Link>
            </div>
            <span className="text-[18px]">6.chapter six</span>
          </div>
          <div>
            <span className="text-[18px]">20:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAudio;
