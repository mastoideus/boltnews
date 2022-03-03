import React from "react";
import { motion } from "framer-motion";
import NewsItem from "./NewsItem";

const NewsList = ({ news, searched }) => {
  return (
    <motion.div
      initial={{
        y: 150,
        opacity: 0.2,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.7,
        duration: 1,
      }}
      className="flex flex-col md:flex-row md:flex-wrap  md:justify-between   gap-y-6"
    >
      {news.map((article, i) => {
        return (
          <NewsItem
            key={article.publishedAt}
            {...article}
            searched={searched}
          />
        );
      })}
    </motion.div>
  );
};

export default NewsList;
