import React from "react";

const ArticleRight = ({ content, source, description }) => {
  return (
    <div className=" lg:w-[55%] p-8 lg:py-32 lg:px-20 lg:bg-white bg-slate-200 ">
      <h1 className="font-header">
        <span className="bg-red-800 text-white lg:text-red-900 lg:bg-red-100 text-lg lg:text-2xl p-2 rounded-tr-3xl">
          {source}
        </span>
      </h1>
      <p className="text-base md:text-xl   p-2 border-l-4 border-b-4 lg:border-red-100 border-red-900  font-main text-gray-600 font-semibold">
        {description}
      </p>
    </div>
  );
};

export default ArticleRight;
