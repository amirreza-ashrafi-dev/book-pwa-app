import Link from "next/link";
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
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-4 mx-4">
      {/* Header */}
      <div>
        <div className="flex justify-between w-full">
          <button className="bg-Grandis w-[120px] h-[40px] rounded-xl">
            log in
          </button>
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="h-[40px] outline-none"
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
        <div className="px-1">
          <span className="font-bold">books</span>
          <Image alt="books" src={Pic2} className="mt-2" />
        </div>
        <div className="px-1">
          <span className="font-bold">audio books</span>
          <Image alt="books" src={Pic3} className="mt-2" />
        </div>
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
                animals. one day when shes playing with her imaginary friend....
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
      <div>
        <div>
          <span className="font-bold  text-[19px]">remaining</span>
          <div className="flex mt-2 justify-center">
            <Image alt="recommended" className="mr-4" src={Pic5} width={250} />
            <Image alt="recommended" className="mr-4" src={Pic6} width={250} />
            <Image alt="recommended" className="mr-4" src={Pic7} width={250} />
            <Image alt="recommended" className="mr-4" src={Pic8} width={250} />
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full"></div>
    </div>
  );
}
