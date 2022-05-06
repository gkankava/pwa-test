const initialState = "tabView";

export const currentTabScene = (set, get) => ({
  currentScene: initialState,
  setCurrentScene: (id) => {
    set(() => ({ currentScene: id }));
  },
});
