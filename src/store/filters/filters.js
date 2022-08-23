import produce from "immer";

const initialState = {
  radius: 5,
  orderBy: "updated_at",
  locations: {
    categories: [],
    search: "",
  },
  events: {
    categories: [],
    search: "",
  },
  news: {
    categories: [],
    search: "",
  },
};

export const filtersSlice = (set, get) => ({
  filters: initialState,
  setRadius: (val) => {
    set(
      produce((state) => {
        state.filters.radius = val;
      })
    );
  },
  setSearch: (refer, val) => {
    set(
      produce((state) => {
        state.filters[refer].search = val;
      })
    );
  },
  toogleCategory: (refer, id) => {
    let arr = get().filters[refer].categories;
    let exists = arr.includes(id);
    if (exists) {
      set(
        produce((state) => {
          state.filters[refer].categories = state.filters[
            refer
          ].categories.filter((i) => i !== id);
        })
      );
    } else {
      set(
        produce((state) => {
          state.filters[refer].categories.push(id);
        })
      );
    }
  },
});
