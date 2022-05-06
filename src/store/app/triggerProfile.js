const initialState = false;

export const triggerProfileSlice = (set, get) => ({
  profileState: initialState,
  triggerProfileState: (bool) => {
    set(() => ({ profileState: bool }));
  },
});
