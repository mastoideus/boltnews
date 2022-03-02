/*action creator function for fetching top-headings and searched articles */
export const fetchNewsData = (url, addFunc) => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch news data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const newsData = await fetchNews();

      dispatch(addFunc(newsData.articles));
    } catch (error) {
      console.log(error.message);
    }
  };
};
