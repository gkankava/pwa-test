import produce from "immer";
import { getLocation } from "api/lib/locations/index";

const initialState = {
  lastLocation: false,
  data: [],
  location: false,
  fetching: false,
  fetched: false,
  error: null,
};

export const locationItemsSlice = (set, get) => ({
  locationItems: initialState,
  fetchLocation: async (id) => {
    set(
      // produce((state) => {
      //   state.locationItems.location = false;
      //   state.locationItems.fetching = true;
      // })
      (state) => ({
        locationItems: {
          ...initialState,
          fetching: true,
        },
      })
    );
    getLocation(id)
      .then((res) => {
        set(
          produce((state) => {
            state.locationItems.fetching = false;
            state.locationItems.fetched = true;
            state.locationItems.error = null;
            state.locationItems.data.push(res.data);
            state.locationItems.lastLocation = res.data;
            state.locationItems.location = res.data;
          })
        );
      })
      .catch((err) => {
        set(
          produce((state) => {
            state.locationItems.fetching = false;
            state.locationItems.error = err.response;
          })
        );
      });
  },
  setLastLocation: (item) => {
    set(
      produce((state) => {
        state.locationItems.lastLocation = item;
      })
    );
  },
});
