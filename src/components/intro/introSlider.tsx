import Image from "next/image";
import Pic1 from "../../../public/Book Dinosaurs 1 (1).png";
import Pic2 from "../../../public/dnn 1 (1).png";
import { useState } from "react";
import { motion } from "framer-motion";

const IntroSlider = () => {
  const [sliderCounter, setSlideCounter] = useState(0);
  return (
    <div className="flex flex-col items-center">
      {sliderCounter === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Image src={Pic1} alt="slider image" height={300} />
        </motion.div>
      )}
      {sliderCounter === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Image src={Pic2} alt="slider image" height={300} />
        </motion.div>
      )}
      <div className="flex mb-3">
        <div
          className={`w-[10px] h-[10px] rounded-xl ${
            sliderCounter === 0 ? "bg-Tenne" : "bg-Tenne60"
          } mr-1`}
        />
        <div
          className={`w-[10px] h-[10px] rounded-xl ${
            sliderCounter === 1 ? "bg-Tenne" : "bg-Tenne60"
          } mr-1`}
        />
      </div>
      <div>
        <div className="px-5">
          {sliderCounter === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <h4 className="text-[30px] font-bold">Diverse books</h4>{" "}
              <p className="text-justify">
                From interactive picture books to charming bedtime stories, our
                collection offers a variety of options for every stage of your
                child's development.
              </p>
            </motion.div>
          )}
          {sliderCounter === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
            >
              <h4 className="text-[30px] font-bold">audio books</h4>{" "}
              <p className="text-justify">
                Spark your child's love for storytelling with our engaging audio
                books, designed to ignite their creativity and foster a lifelong
                love for reading.
              </p>
            </motion.div>
          )}
          <button
            className="mt-3 bg-Tenne w-[112px] h-[36px] rounded-bl-xl rounded-tr-xl text-white"
            onClick={() =>
              setSlideCounter((prev) => (prev === 1 ? 0 : prev + 1))
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSlider;
