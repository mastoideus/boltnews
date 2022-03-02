import React, { Fragment, useState, useCallback } from "react";
import Hero from "../components/NewsPage/Hero";
import SearchBar from "../components/SearchNews/SearchBar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import NewsList from "../components/shared/NewsList";
import SortNews from "../components/SearchNews/SortNews";

const SearchNews = ({ onScrollCircle }) => {
  const [term, setTerm] = useState("");
  const searchedNews = useSelector((state) => state.news.searchedNews);
  const searched = "searched";

  const onSortHandler = useCallback(
    (term) => {
      setTerm(term);
    },
    [term]
  );

  let content;

  if (term === "") {
    content = (
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="flex justify-center items-center min-h-[20rem] "
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl font-header ">
          Search for Articles by <span className=" text-red-700">#</span>
          term
        </h1>
      </motion.div>
    );
  }

  if (searchedNews.length > 0 && term !== "") {
    content = (
      <React.Fragment>
        <SortNews term={term} />
        <div className="py-4 px-6">
          <NewsList news={searchedNews} searched={searched} />
        </div>
      </React.Fragment>
    );
  }

  return (
    <Fragment>
      <Hero
        onScrollNav={onScrollCircle}
        focusText="Capture*the*Fragment*"
        letterSpace={17}
        textFont="font-circle"
      >
        <SearchBar onSort={onSortHandler} />
      </Hero>
      {content}
    </Fragment>
  );
};

export default SearchNews;
