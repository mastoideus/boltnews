import React from "react";
import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";

const ArticleDetail = ({ article }) => {
  if (!article) {
    return (
      <div className="flex justify-center items-center h-[100%] pt-[15rem]">
        <div className="spinner-border animate-pulse  w-40 h-40 flex justify-center items-center border-4 rounded-full">
          <span className="visually-hidden font-header animate-pulse ">
            Loading...
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[100%] h-[100vh]   flex flex-col lg:flex-row ">
      <ArticleLeft
        image={article.urlToImage}
        title={article.title}
        source={article.source}
        author={article.author}
      />
      <ArticleRight
        content={article.content}
        source={article.source.name}
        description={article.description}
      />
    </div>
  );
};

export default ArticleDetail;
