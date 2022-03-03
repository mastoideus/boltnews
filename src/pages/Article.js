import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleDetail from "../components/ArticlePage/ArticleDetail";

export const Article = () => {
  const location = useLocation();

  /*getting the two possible chunks of news data */
  const news = useSelector((state) => state.news.news);
  const searchedNews = useSelector((state) => state.news.searchedNews);

  /*extracting dynamic article id from path*/
  const params = useParams();
  const articleSlug = decodeURIComponent(params.newsId);

  /* searching for the clicked article depending on the starting path */
  const searched = location.state;
  const clickedArticle = (searched === "searched" ? searchedNews : news).find(
    (article) => article.title === articleSlug
  );

  return <ArticleDetail article={clickedArticle} />;
};
