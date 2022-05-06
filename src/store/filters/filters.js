import produce from "immer";

const initialState = {
  radius: 5,
  orderBy: "updated_at",
  locations: {
    categories: [],
  },
  events: {
    categories: [],
  },
  news: {
    categories: [],
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
});
