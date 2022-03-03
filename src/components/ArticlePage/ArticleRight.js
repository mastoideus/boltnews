import React from "react";

const ArticleRight = ({ content, source, description, publishDate, url }) => {
  const readableDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className=" lg:w-[55%] p-8 lg:py-32 lg:px-20 lg:bg-white bg-slate-200 ">
      <h1 className="font-header">
        <span className="bg-red-800 text-white lg:text-red-900 lg:bg-red-100 text-lg lg:text-2xl p-2 rounded-tr-3xl">
          {source}
        </span>
      </h1>
      <p className="text-base md:text-xl  p-2 border-l-4 border-b-4 lg:border-red-100 border-red-900  font-main text-gray-600 font-semibold">
        {description}
      </p>
      <p className="mt-7 lg:mt-10 px-4 first-letter:text-2xl first-letter:font-header  first-letter:text-red-900 lg:first-letter:text-3xl first-letter:p-[2px] font-main">
        {content}
      </p>
      <div className=" float-right">
        <p className="  my-12 text-sm lg:text-base italic lg:mt-12 border-r-4 border-r-red-800 pr-2">
          {readableDate}
        </p>
        <button className="  border-2 p-2 border-gray-100 font-header fixed bg-white right-0 bottom-0 rounded-tl-3xl hover:animate-pulse transition-all duration-500 hover:border-gray-300 hover:text-red-500">
          <a href={url} target="_blank" rel="noreferrer">
            {source || "Source"}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ArticleRight;
