const initialState = "en";

export const languageSlice = (set, get) => ({
  language: initialState,
  setLanguage: (language) => {
    set(() => ({ language }));
  },
});
