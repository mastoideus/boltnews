import React, { Fragment } from "react";
import Hero from "../components/NewsPage/Hero";
import NewsSection from "../components/NewsPage/NewsSection";
import { useSelector } from "react-redux";

export const News = ({ onScrollCircle }) => {
  const news = useSelector((state) => state.news.news);

  return (
    <Fragment>
      <Hero
        onScrollNav={onScrollCircle}
        focusText="Focus-the-Truth-"
        letterSpace={23}
        textFont="font-main"
      />
      <div className=" p-[2rem]">
        <NewsSection news={news} />
      </div>
    </Fragment>
  );
};
