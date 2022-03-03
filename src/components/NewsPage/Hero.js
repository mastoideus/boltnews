import React from "react";
import { motion } from "framer-motion";

const Hero = ({ onScrollNav, focusText, letterSpace, textFont, children }) => {
  return (
    <section className=" relative flex flex-col justify-center box-border w-[100%] items-center min-h-[400px] bg-gray-200">
      <motion.div
        initial={{
          y: -300,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="relative w-[200px] h-[200px]  bg-slate-50 flex justify-center items-center rounded-full shadow-lg"
      >
        <div
          className={`aboslute w-[100%] h-[100%] ${
            onScrollNav && "rotate-[360deg]"
          } transition-all duration-[4s]`}
        >
          <div className="absolute left-[30%] top-[30%] flex items-center justify-center  rounded-full w-[40%] h-[40%]  bg-black ">
            <div
              style={{
                width: onScrollNav ? "96%" : "5%",
                height: onScrollNav ? "96%" : "5%",
              }}
              className="relative bg-gray-200 w-[5%] h-[5%]  transition-all duration-[1.2s] rounded-full "
            ></div>
          </div>
          <h1 className={`${textFont && textFont}`}>
            {focusText.split("").map((char, i) => {
              return (
                <span
                  key={i}
                  style={{ transform: `rotate(${+i * letterSpace}deg)` }}
                  className={`absolute  left-[50%] text-[1.2em]  uppercase  origin-[0px_100px]`}
                >
                  {char}
                </span>
              );
            })}
          </h1>
        </div>
      </motion.div>
      {children}
    </section>
  );
};

export default Hero;
