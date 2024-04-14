// icons
import Search from "@/icons/search-icon";
import Pic from "../../public/icons/dnn 1.png";
import Pic2 from "../../public/world-book.png";
import Pic3 from "../../public/audio-books.png";
import Pic4 from "../../public/recommended-image.png";
import Pic5 from "../../public/remaining.png";
import Pic6 from "../../public/remaining2.png";
import Pic7 from "../../public/remaining3.png";
import Pic8 from "../../public/remaining4.png";

import Link from "next/link";

import Image from "next/image";
import CircularProgres from "@/components/circular-progress";

export default function Home() {
  // const Router = useRouter();
  return (
    <div className="mt-4 mx-4">
      {/* Header */}
      <div>
        <div className="flex justify-between w-full">
          <button
            className="bg-Grandis w-[120px] h-[40px] rounded-xl"
            // onClick={() => Router.push("/auth/login")}
          >
            <Link href={"/auth/login"}>log in</Link>
          </button>
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-[40px] outline-none pl-[18px]"
            />
            <div className="absouloute -translate-x-6">
              <Search />
            </div>
          </div>
        </div>
        {/* banner */}
        <div className=" w-full flex flex-row-reverse items-cente justify-between bg-Grandis mx-auto mt-3 rounded-xl">
          <Image src={Pic} alt="banner image" className="mt-4" width={250} />
          <div className="mt-[90px] ml-[30px] mb-6">
            <div className="flex flex-col mb-2 w-[100%]">
              <h5 className="small:text-[20px] w-full small:font-bold superSmall:text-[15px] superSmall:font-bold superSmall:ml-5">
                ready for a
              </h5>
              <h5 className="small:text-[24px] font-bold superSmall:text-[17px] superSmall:ml-5">
                journey?
              </h5>
            </div>
            <button className="bg-Tenne small:w-[112px] mt-2 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
              read
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Link href={"/book/ebook"}>
          <div className="px-1">
            <span className="font-bold">books</span>
            <Image alt="books" src={Pic2} className="mt-2" />
          </div>
        </Link>
        <Link href={"/book/audio"}>
          <div className="px-1">
            <span className="font-bold">audio books</span>
            <Image alt="books" src={Pic3} className="mt-2" />
          </div>
        </Link>
      </div>
      {/* recommended */}
      <div className="mt-4">
        <div>
          <span className="font-bold  text-[19px]">recommended</span>
          <div className="flex mt-2">
            <Image alt="recommended" className="mr-4" src={Pic4} width={270} />
            <div className="flex flex-col">
              <span className="font-bold text-[23px] ">unseen world</span>
              <span className="text-Chino">by: jamila francis</span>
              <span className="text-Chino">science</span>
              <span className="text-[13px]">
                sara is a little girl who living with her mom. she loves
                animals. one day....
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-Tenne small:w-[112px] mt-2 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
              read
            </button>
          </div>
        </div>
      </div>
      {/* remaining */}
      <div className="mb-3">
        <div>
          <span className="font-bold  text-[19px]">remaining</span>
          <div className="flex mt-2 justify-center items-center">
            <div className="relative">
              <Image alt="recommended" className="mr-4" src={Pic5} />
              <div className="absolute bottom-1 right-3 z-10">
                <CircularProgres />
                <span className="text-white absolute top-0 text-[9px] ml-[9px] mt-[8px]">
                  20%
                </span>
              </div>
            </div>
            <div className="relative ">
              <Image alt="recommended" className="mr-4" src={Pic6} />
              <div
                className="bg-black absolute top-0 z-20 w-[90px]  h-full opacity-50"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(254,254,254,0.7120098039215687) 100%)",
                }}
              />

              <div className="absolute bottom-1 right-3 z-20">
                <CircularProgres />
                <span className="text-white absolute top-0 text-[9px] ml-[9px] mt-[8px]">
                  20%
                </span>
              </div>
            </div>
            <div className="relative">
              <Image alt="recommended" className="mr-4" src={Pic7} />
              <div
                className="bg-black w-[90px] absolute top-0 z-20 h-full opacity-50"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(254,254,254,0.7120098039215687) 100%)",
                }}
              />
              <div className="absolute bottom-1 right-3 z-20">
                <CircularProgres />
                <span className="text-white  absolute top-0 text-[9px] ml-[9px] mt-[8px]">
                  20%
                </span>
              </div>
            </div>
            <div className="relative">
              <Image alt="recommended" className="mr-4" src={Pic8} />
              <div
                className="bg-black absolute top-0 z-20 w-[90px] h-full opacity-50"
                style={{
                  background:
                    "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(254,254,254,0.7120098039215687) 100%)",
                }}
              />
              <div className="absolute bottom-1 right-3 z-20">
                <CircularProgres />
                <span className="text-white absolute top-0 text-[9px] ml-[9px] mt-[8px]">
                  20%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
