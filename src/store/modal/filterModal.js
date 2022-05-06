const initialState = {
  active: false,
};

export const filterModalSlice = (set, get) => ({
  filterModal: initialState,
  setFilterModal: (obj) => {
    set(() => ({ filterModal: obj }));
  },
});
