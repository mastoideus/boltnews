import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../../assets/images/logo.jpeg";
import { motion } from "framer-motion";

const MainHeader = ({ onScrollNav, children }) => {
  return (
    <motion.header
      initial={{
        y: -150,
      }}
      animate={{
        y: 0,
      }}
      className={` flex justify-between w-[100vw] box-border    items-center px-2  md:px-12 py-4 font-header h-[4.8rem] fixed top-0 left-0 z-[100] transition-all duration-[0.4s] ${
        onScrollNav && "bg-white shadow"
      }  `}
    >
      <div className="flex items-center  text-m md:text-2xl ">
        <h3 className="">Bolt</h3>
        <img src={logoImg} alt="" className="w-12 h-12" />
        <h3>News</h3>
      </div>
      <div>{children}</div>
      <nav>
        <ul className="flex list-none">
          <li className="btnLineBottom mr-3 md:mr-6 text-sm  md:text-lg relative">
            <NavLink to="/news">Home</NavLink>
          </li>
          <li className=" btnLineBottom mr-3 md:mr-6 text-sm  md:text-lg relative">
            <NavLink to="/search-news">Search</NavLink>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default MainHeader;
