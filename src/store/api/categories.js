import produce from "immer";
import { getCategories } from "api/lib/categories";

const initialState = {
  locations: {
    data: false,
    error: null,
    canFetchNext: false,
    fetchingNext: false,
  },
  events: {
    data: false,
    error: null,
    canFetchNext: false,
    fetchingNext: false,
  },
  news: {
    data: false,
    error: null,
    canFetchNext: false,
    fetchingNext: false,
  },
  fetching: false,
  fetched: false,
};

export const categoriesSlice = (set, get) => ({
  categories: initialState,
  fetchCategories: async (params) => {
    set(
      produce((state) => {
        state.categories.fetching = true;
      })
    );
    Promise.all([
      getCategories({ ...params, for: "locations" }),
      getCategories({ ...params, for: "events" }),
      getCategories({ ...params, for: "news" }),
    ])
      .then((res) => {
        set(
          produce((state) => {
            state.categories.fetching = false;
            state.categories.fetched = true;
          })
        );
        for (let i = 0; i < res.length; i++) {
          set(
            produce((state) => {
              state.categories[
                i === 0 ? "locations" : i === 1 ? "events" : "news"
              ].data = res[i].data;
              state.categories[
                i === 0 ? "locations" : i === 1 ? "events" : "news"
              ].canFetchNext = res[i].data.next_page_url ? true : false;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  },
});
