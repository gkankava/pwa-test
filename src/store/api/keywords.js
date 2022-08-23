import {
  getNextSuggestedKeywords,
  getSuggestedKeywords,
} from "api/lib/keywords";
import { getNextSearch, getSearch } from "api/lib/search";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const suggestedKeywordsSlice = (set, get) => ({
  keywords: initialState,
  fetchSuggestedKeywords: async (query) => {
    set((state) => ({
      keywords: { ...state.keywords, fetching: true },
    }));
    getSuggestedKeywords(query)
      .then((res) => {
        set((state) => ({
          keywords: {
            ...state.keywords,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          keywords: {
            ...state.keywords,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchSuggestedKeywordsNext: async () => {
    set((state) => ({ keywords: { ...state.keywords, fetchingNext: true } }));
    let url = get().keywords.data.next_page_url;
    getNextSuggestedKeywords(url)
      .then((res) => {
        set((state) => ({
          keywords: {
            ...state.keywords,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.keywords.data,
              data: [...state.keywords.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          keywords: {
            ...state.keywords,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetSuggestedKeywordsFetched: () => {
    set((state) => ({
      keywords: { ...state.keywords, fetched: false },
    }));
  },
});
