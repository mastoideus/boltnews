import React from "react";
import NewsList from "../shared/NewsList";

const NewsSection = ({ news }) => {
  return <NewsList news={news} />;
};

export default NewsSection;
