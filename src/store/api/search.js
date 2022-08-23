import { getNextSearch, getSearch } from "api/lib/search";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const searchSlice = (set, get) => ({
  searched: initialState,
  fetchSearch: async (query, keywords) => {
    set((state) => ({
      searched: { ...state.searched, fetching: true },
    }));
    getSearch(query, keywords)
      .then((res) => {
        set((state) => ({
          searched: {
            ...state.searched,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          searched: {
            ...state.searched,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchSearchnext: async () => {
    set((state) => ({ searched: { ...state.searched, fetchingNext: true } }));
    let url = get().searched.data.next_page_url;
    getNextSearch(url)
      .then((res) => {
        set((state) => ({
          searched: {
            ...state.searched,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.searched.data,
              data: [...state.searched.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          searched: {
            ...state.searched,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetSearchFetched: () => {
    set((state) => ({
      searched: initialState,
    }));
  },
});
