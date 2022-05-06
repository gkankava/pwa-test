const initialState = false;

export const appLoadingSlice = (set, get) => ({
  appLoading: initialState,
  setAppLoading: (appLoading) => {
    set(() => ({ appLoading }));
  },
});
