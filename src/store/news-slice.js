import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    searchedNews: [],
  },
  reducers: {
    addFetchedNews(state, action) {
      state.news = action.payload;
    },
    addSearchedNews(state, action) {
      state.searchedNews = action.payload;
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
