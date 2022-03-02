import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";
import { fetchNewsData } from "../../store/news-actions";

const SortNews = ({ term }) => {
  const [sortType, setSortType] = useState("");
  const dispatch = useDispatch();

  const submitSortHandler = (e) => {
    e.preventDefault();
    console.log(sortType);
    const url = `https://newsapi.org/v2/everything?q=${term}&sortBy=${sortType}&apiKey=f09c2bf0b57c456f84b70b851fe67ceb`;
    dispatch(fetchNewsData(url, newsActions.addSearchedNews));
  };

  return (
    <div className=" text-center  bg-slate-100 lg:bg-slate-200   mb-4">
      <form
        onSubmit={submitSortHandler}
        className="flex items-center p-2 font-header lg:border-t-4 rounded-tr-full rounded-tl-full bg-slate-100 border-slate-200 justify-center gap-6 md:mx-[10%] lg:mx-[30%] text-sm md:text-base lg:text-lg"
      >
        <p>Sort by</p>
        <div className="flex items-center gap-x-2 ">
          <span className="sortBtn">
            <label htmlFor="popularity">POPULARITY</label>
            <input
              type="radio"
              id="popularity"
              value="popularity"
              name="radio"
              onChange={(e) => setSortType(e.target.value)}
            />
          </span>
          <span className="sortBtn">
            <label htmlFor="relevance">RELEVANCY</label>
            <input
              type="radio"
              id="relevance"
              value="relevancy"
              name="radio"
              className="font-semibold"
              onChange={(e) => setSortType(e.target.value)}
            />
          </span>
          <span className="sortBtn">
            <label htmlFor="published-date">PUBLISHED DATE</label>
            <input
              type="radio"
              id="published-date"
              value="publishedAt"
              name="radio"
              onChange={(e) => setSortType(e.target.value)}
            />
          </span>
        </div>
        <button className="border-2 transition-all duration-300 p-2 rounded-full hover:border-red-600">
          Sort
        </button>
      </form>
    </div>
  );
};

export default SortNews;
