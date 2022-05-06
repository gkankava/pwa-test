import produce from "immer";
import { getNews } from "api/lib/news";

const initialState = {
  lastNews: false,
  data: [],
  newsItem: false,
  fetching: false,
  fetched: false,
  error: null,
};

export const newsItemsSlice = (set, get) => ({
  newsItems: initialState,
  fetchNewsItem: async (id, coords) => {
    set(
      // produce((state) => {
      //   state.newsItems.fetching = true;
      // })
      () => ({
        newsItems: {
          ...initialState,
          fetching: true,
        },
      })
    );
    getNews(id, coords)
      .then((res) => {
        set(
          produce((state) => {
            state.newsItems.fetching = false;
            state.newsItems.fetched = true;
            state.newsItems.error = null;
            state.newsItems.data.push(res.data);
            state.newsItems.lastNews = res.data;
            state.newsItems.newsItem = res.data;
          })
        );
      })
      .catch((err) => {
        set(
          produce((state) => {
            state.newsItems.fetching = false;
            state.newsItems.error = err.response;
          })
        );
      });
  },
  setlastNews: (item) => {
    set(
      produce((state) => {
        state.newsItems.lastNews = item;
      })
    );
  },
});
