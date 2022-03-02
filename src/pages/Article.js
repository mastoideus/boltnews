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

  console.log(searchedNews);

  const searched = location.state;

  /*extracting dynamic article id from path*/
  const params = useParams();
  const articleSlug = decodeURIComponent(params.slug);

  const concatedData = searchedNews.concat(news);

  /* searching for the clicked article depending on the starting path */
  const clickedArticle = concatedData.find(
    (article) => article.title === articleSlug
  );
  console.log(clickedArticle);

  return <ArticleDetail article={clickedArticle} />;
};
