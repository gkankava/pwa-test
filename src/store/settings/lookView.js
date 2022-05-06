const initialState = "list";

export const viewModeSlice = (set, get) => ({
  look: initialState,
  setViewMode: (mode) => {
    set(() => ({ look: mode }));
  },
});
