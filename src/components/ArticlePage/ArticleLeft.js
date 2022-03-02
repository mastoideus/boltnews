import React from "react";

const ArticleLeft = ({ image, title, source, description, author }) => {
  return (
    <div className=" w-[100%] lg:w-[45%]   bg-slate-200 p-2 lg:p-4 lg:pt-10   pt-[3rem]   ">
      <div className=" bg-white p-8 px-4 lg:px-8 md:pt-20  w-[100%] space-y-4  h-[100%] overflow-hidden shadow-sm lg:shadow-md shadow-gray-400 ">
        <h1 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-header text-slate-800 leading-8    ">
          {title}
        </h1>
        <h2 className=" font-semibold border-l-4 border-red-800 pl-1">
          Author:{" "}
          <span className=" italic text-red-900 text-base md:text-lg">
            {author}
          </span>
        </h2>

        <div className="w-[100%] m:h-[50%] lg:h-[43%]  2xl:h-[53%]  shadow-md ">
          <img
            src={image}
            alt=""
            className="w-[100%] h-[100%] object-cover opacity-40   "
          />
        </div>
        <p className=" float-right font-header text-sm md:text-lg">
          Source: <span className=" text-red-800">{source.name}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleLeft;
