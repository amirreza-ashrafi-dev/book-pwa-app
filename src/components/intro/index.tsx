"use client";

import { motion, useAnimate } from "framer-motion";
import IntroSlider from "./introSlider";
import { useState } from "react";

const Intro = () => {
  const [scope, animate] = useAnimate();
  const [letsStart, setLetsStart] = useState(false);
  const handleIntroShowPage = () => {
    localStorage.setItem("intro", "1");
    animate(
      scope.current,
      { marginLeft: "2000px" },
      { duration: 1, ease: "easeInOut" }
    );
  };
  return !letsStart ? (
    <motion.div
      ref={scope}
      className="flex flex-col h-screen top-0 left-0 fixed w-full z-50"
    >
      <div className="w-full absolute flex justify-end z-20">
        <span
          className="mt-2 mr-2 font-bold cursor-pointer"
          onClick={handleIntroShowPage}
        >
          Skip
        </span>
      </div>
      <motion.div
        initial={{ marginLeft: "-300px" }}
        animate={{ marginLeft: "0" }}
        transition={{ duration: 0.75 }}
        className=" w-full h-[50%] bg-white"
      />
      <motion.div
        initial={{ marginLeft: "-500px" }}
        animate={{
          marginLeft: "0",
        }}
        transition={{ duration: 0.75 }}
        style={{
          borderWidth: `${window.innerHeight / 2 + 38}px 0 0 ${
            window.innerWidth
          }px`,
          borderColor: "transparent transparent transparent #fac63d",
        }}
        className={` "rotate-0" absolute -mt-[37px] `}
      />
      <motion.div
        initial={{ marginLeft: "-500px" }}
        animate={{ marginLeft: "0" }}
        className="bg-Grandis  h-[50%] w-full"
        transition={{ duration: 0.75 }}
      />
      <div className="absolute left-0 right-0 top-16 h-[100px]">
        <IntroSlider changeStart={setLetsStart} />
      </div>
    </motion.div>
  ) : (
    <motion.div
      className="flex flex-col h-screen top-0 left-0 fixed w-full z-50"
      ref={scope}
    >
      <div className="absolute left-0 right-0 top-16 h-[100px]">
        <IntroSlider changeStart={setLetsStart} start={letsStart} handleIntroShow={handleIntroShowPage} />
      </div>
    </motion.div>
  );
};

export default Intro;
