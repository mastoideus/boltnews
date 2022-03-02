import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    searchedNews: [],
    term: "",
  },
  reducers: {
    addFetchedNews(state, action) {
      state.news = action.payload;
    },
    addSearchedNews(state, action) {
      if (action.payload === "") {
        state.searchedNews = [];
      }
      state.searchedNews = action.payload;
    },
    storeTerm(state, action) {
      state.term = action.payload;
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice;
