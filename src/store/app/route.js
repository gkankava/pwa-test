const initialState = null;

export const routeSlice = (set, get) => ({
  route: initialState,
  setCurrentRoute: (currentRoute) => {
    console.log("[current route] : ", currentRoute);
    set(() => ({ route: currentRoute }));
  },
});
