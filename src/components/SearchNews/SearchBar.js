import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { newsActions } from "../../store/news-slice";
import { fetchNewsData } from "../../store/news-actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchBar = (props) => {
  const initialTerm = useSelector((state) => state.news.term);
  const [enteredTerm, setEnteredTerm] = useState(initialTerm);
  const dispatch = useDispatch();

  const { onSort } = props;
  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${enteredTerm}&apiKey=f09c2bf0b57c456f84b70b851fe67ceb`;

    if (enteredTerm.length > 1) {
      dispatch(newsActions.storeTerm(enteredTerm));
    }
    dispatch(newsActions.storeTerm(enteredTerm));
    /*debouncing, fetching the searched News and rewriting the state */
    const timeout = setTimeout(() => {
      console.log("Running function for fetching");
      dispatch(fetchNewsData(url, newsActions.addSearchedNews));
    }, 700);
    console.log("Running searchfetch function ");

    /*lifting the state up to SearchNews for url sorting purposes */
    onSort(enteredTerm);

    return () => {
      clearTimeout(timeout);
    };
  }, [enteredTerm, dispatch, onSort]);

  return (
    <div className="flex lg:w-[30%] bg-slate-100 px-1 lg:p-2 items-center  rounded-full mt-8 justify-between">
      <input
        type="text"
        value={enteredTerm}
        placeholder="Search by term"
        className="p-3 flex-1 outline-none border-none bg-transparent placeholder:font-header"
        onChange={(e) => setEnteredTerm(e.target.value)}
      />

      <ImSearch className="text-2xl lg:text-3xl mr-2" />
    </div>
  );
};

export default SearchBar;
