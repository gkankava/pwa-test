import { getNewsList, getNextNews } from "api/lib/news";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const newsSlice = (set, get) => ({
  news: initialState,
  fetchNews: async (params) => {
    set((state) => ({
      news: { ...state.news, fetching: true },
    }));
    // await wait(1000);
    // set((state) => ({
    //   news: {
    //     ...state.news,
    //     fetching: false,
    //     fetched: true,
    //     data: d1,
    //     canFetchNext: d1.next_page_url ? true : false,
    //   },
    // }));
    getNewsList(params)
      .then((res) => {
        set((state) => ({
          news: {
            ...state.news,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          news: {
            ...state.news,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchNewsNext: async () => {
    set((state) => ({ news: { ...state.news, fetchingNext: true } }));
    let url = get().news.data.next_page_url;
    // await wait(1000);
    // set((state) => ({
    //   news: {
    //     ...state.news,
    //     fetchingNext: false,
    //     canFetchNext: d2.next_page_url ? true : false,
    //     data: {
    //       ...d2,
    //       data: [...state.news.data.data, ...d2.data],
    //     },
    //   },
    // }));
    getNextNews(url)
      .then((res) => {
        set((state) => ({
          news: {
            ...state.news,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.news.data,
              data: [...state.news.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          news: {
            ...state.news,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetNewsFetched: () => {
    set((state) => ({
      news: { ...state.news, fetched: false },
    }));
  },
});
