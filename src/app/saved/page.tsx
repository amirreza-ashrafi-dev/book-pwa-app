import Image from "next/image";
import Faza from "../../../public/faza.png";
import Pic1 from "../../../public/Rectangle 131.png";
import Pic2 from "../../../public/Rectangle 132.png";
import Pic3 from "../../../public/Rectangle 119.png";
import Pic4 from "../../../public/Rectangle 122.png";
import Pic5 from "../../../public/Rectangle 120.png";
import Pic6 from "../../../public/Rectangle 133.png";
import PlayerIcon from "@/icons/player-icons";

const Saved = () => {
  return (
    <div>
      {/* title */}
      <div className="flex justify-center mt-3 text-[20px]">
        <span>Saved</span>
      </div>
      {/* categories */}
      <div className="flex overflow-x-scroll overflow-x-[0px] no-scrollbar mt-6">
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          science
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          history
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          tech
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          novel
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          science
        </div>
        <div className=" px-4 rounded-tr-lg w-[90px] text-Tenne font-bold h-[32px] rounded-bl-lg ml-4 border-[2px] border-Tenne flex justify-center items-center">
          history
        </div>
      </div>

      {/* books */}
      <div>
        <div className="mt-4 px-4">
          <div className="flex justify-between font-mono">
            <span>books</span>
            <span>more</span>
          </div>
          <div>
            <div className="flex mt-2">
              <Image
                alt="recommended"
                className="mr-4"
                src={Faza}
                width={270}
              />
              <div className="flex flex-col">
                <span className="font-bold text-[23px] ">unseen world</span>
                <span className="text-Chino">by: jamila francis</span>
                <span className="text-Chino">science</span>
                <span className="text-[13px]">
                  sara is a little girl who living with her mom. she loves
                  animals. one day when shes playing with her imaginary
                  friend....
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="bg-Tenne small:w-[112px] mt-4 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
                read
              </button>
            </div>
          </div>
          <div>
            <div className="flex mt-2">
              <Image
                alt="recommended"
                className="mr-4"
                src={Pic1}
                width={270}
              />
              <div className="flex flex-col">
                <span className="font-bold text-[23px] ">unseen world</span>
                <span className="text-Chino">by: jamila francis</span>
                <span className="text-Chino">science</span>
                <span className="text-[13px]">
                  sara is a little girl who living with her mom. she loves
                  animals. one day when shes playing with her imaginary
                  friend....
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="bg-Tenne small:w-[112px] mt-4 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
                read
              </button>
            </div>
          </div>
          <div>
            <div className="flex mt-2">
              <Image
                alt="recommended"
                className="mr-4"
                src={Pic2}
                width={270}
              />
              <div className="flex flex-col">
                <span className="font-bold text-[23px] ">unseen world</span>
                <span className="text-Chino">by: jamila francis</span>
                <span className="text-Chino">science</span>
                <span className="text-[13px]">
                  sara is a little girl who living with her mom. she loves
                  animals. one day when shes playing with her imaginary
                  friend....
                </span>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="bg-Tenne small:w-[112px] mt-4 -translate-y-2 small:h-[36px]  rounded-bl-xl rounded-tr-xl text-white superSmall:w-[80px] superSmall:h-[30px] superSmall:ml-5">
                read
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* audio books */}
      <div className="mt-4 px-4">
        <div className="font-mono flex justify-between mb-3">
          <span className="font-bold text-[24px]">audio books</span>
          <span>more</span>
        </div>
        {/* audio books cart */}
        <div className="w-full flex justify-between flex-wrap font-mono">
          <div className="mb-5">
            <div className="relative w-[180px] ">
              <Image alt="audio-book" src={Pic3} width={180} />
              <div className="absolute bottom-0 flex justify-between w-full bg-[#D9D9D9] rounded-bl-xl rounded-br-xl">
                <div className="flex flex-col items-center ml-3 py-2">
                  <span>shadows</span>
                  <span>1:38:56</span>
                </div>
                <div className="bg-white w-fit p-2 block rounded-xl h-fit my-auto mr-2">
                  <PlayerIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="relative w-[180px] ">
              <Image alt="audio-book" src={Pic4} width={180} />
              <div className="absolute bottom-0 flex justify-between w-full bg-[#D9D9D9] rounded-bl-xl rounded-br-xl">
                <div className="flex flex-col items-center ml-3 py-2">
                  <span>shadows</span>
                  <span>1:38:56</span>
                </div>
                <div className="bg-white w-fit p-2 block rounded-xl h-fit my-auto mr-2">
                  <PlayerIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="relative w-[180px] ">
              <Image alt="audio-book" src={Pic5} width={180} />
              <div className="absolute bottom-0 flex justify-between w-full bg-[#D9D9D9] rounded-bl-xl rounded-br-xl">
                <div className="flex flex-col items-center ml-3 py-2">
                  <span>shadows</span>
                  <span>1:38:56</span>
                </div>
                <div className="bg-white w-fit p-2 block rounded-xl h-fit my-auto mr-2">
                  <PlayerIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="relative w-[180px] ">
              <Image alt="audio-book" src={Pic6} width={180} />
              <div className="absolute bottom-0 flex justify-between w-full bg-[#D9D9D9] rounded-bl-xl rounded-br-xl">
                <div className="flex flex-col items-center ml-3 py-2">
                  <span>shadows</span>
                  <span>1:38:56</span>
                </div>
                <div className="bg-white w-fit p-2 block rounded-xl h-fit my-auto mr-2">
                  <PlayerIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
