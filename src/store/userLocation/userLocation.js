// import { getCurrentLocationAsync } from "utils/userLocation";

const initialState = {
  latitude: 48.5275439,
  longitude: 8.514803,
};

export const userLocationSlice = (set, get) => ({
  userLocation: initialState,
  setUserLocation: (coords) => {
    // set(() => ({ userLocation: coords }));
    set(() => ({
      userLocation: {
        latitude: 48.5275439,
        longitude: 8.514803,
      },
    }));
  },
  // fetchCurrentLocation: async () => {
  //   getCurrentLocationAsync()
  //     .then((res) => {
  //       // set(() => ({ userLocation: res.coords }));
  //       set(() => ({
  //         userLocation: {
  //           latitude: 48.5275439,
  //           longitude: 8.514803,
  //         },
  //       }));
  //     })
  //     .catch((err) =>
  //       console.log("ERROR Fetching device location: [", err, "]")
  //     );
  // },
});
