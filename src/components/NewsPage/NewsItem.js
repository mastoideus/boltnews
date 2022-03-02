import React from "react";
import { NavLink } from "react-router-dom";

const NewsItem = ({ description, title, urlToImage, searched }) => {
  return (
    <div className="w-[100%] md:w-[48%] xl:w-[30%] h-[30rem] shadow-md bg-white p-4 relative font-main">
      <div className="w-[100%] h-[50%] md:h-[40%] mb-4">
        <img
          src={urlToImage}
          alt=""
          className="w-[100%] h-[100%]  object-cover"
        />
      </div>

      <h3 className=" text-base md:text-xl font-bold  text-gray-700 mb-6">
        {title}
      </h3>
      <div>
        <p className=" mb-2 text-sm md:text-base">{description}</p>
      </div>
      <div>
        <button className="btnLineTop btnLineBottom text-red-900 font-main  font-semibold absolute right-4 bottom-4   text-sm  md:text-lg ;">
          <NavLink
            to={{
              pathname: `/news/${encodeURIComponent(title)}`,
              state: searched,
            }}
          >
            READ FULL ARTICLE
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
