import React from "react";

const NotFound = ({ notFoundText }) => {
  return (
    <div className=" text-center py-[15rem] ">
      <h2 className=" text-4xl md:text-6xl lg:text-8xl font-header">
        {"Page not found" || notFoundText}
      </h2>
    </div>
  );
};

export default NotFound;
