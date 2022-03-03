import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { News } from "./pages/News";
import { Article } from "./pages/Article";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import SearchNews from "./pages/SearchNews";
import { fetchNewsData } from "./store/news-actions";
import { newsActions } from "./store/news-slice";
import { baseUrl } from "./baseUrl";

const url = `${baseUrl}/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const dispatch = useDispatch();

  /*states for changing css on scroll */
  const [onScrollNav, setOnScrollNav] = useState(false);
  const [onScrollCircle, setOnScrollCricle] = useState(false);

  /*fetching the top-headings and storing in redux*/
  useEffect(() => {
    dispatch(fetchNewsData(url, newsActions.addFetchedNews));
  }, []);

  /*handling the scroll states on different scroll value*/
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setOnScrollNav(true);
      } else {
        setOnScrollNav(false);
      }
      if (window.scrollY > 0) {
        setOnScrollCricle(true);
      } else {
        setOnScrollCricle(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <Layout onScrollNav={onScrollNav}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/news" />
        </Route>
        <Route path="/news" exact>
          <News onScrollCircle={onScrollCircle} />
        </Route>
        <Route path="/news/:newsId" exact>
          <Article />
        </Route>
        <Route path="/search-news">
          <SearchNews onScrollCircle={onScrollCircle} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
