import { getFavouriteNewsList, getNextNews } from "api/lib/news";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const favouriteNewsSlice = (set, get) => ({
  favouriteNews: initialState,
  fetchFavouriteNews: async () => {
    set((state) => ({
      favouriteNews: { ...state.favouriteNews, fetching: true },
    }));
    getFavouriteNewsList()
      .then((res) => {
        set((state) => ({
          favouriteNews: {
            ...state.favouriteNews,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteNews: {
            ...state.favouriteNews,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchFavouriteNewsNext: async () => {
    set((state) => ({
      favouriteNews: { ...state.favouriteNews, fetchingNext: true },
    }));
    let url = get().favouriteNews.data.next_page_url;

    getNextNews(url)
      .then((res) => {
        set((state) => ({
          favouriteNews: {
            ...state.favouriteNews,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.favouriteNews.data,
              data: [...state.favouriteNews.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteNews: {
            ...state.favouriteNews,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetFavouriteNewsFetched: () => {
    set((state) => ({
      favouriteNews: { ...state.favouriteNews, fetched: false },
    }));
  },
});
