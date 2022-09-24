import { getFavoriteLocations, getNextLocations } from "api/lib/locations";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const favouriteLocationsSlice = (set, get) => ({
  favouriteLocations: initialState,
  resetFavouriteLocationsFetched: () => {
    set((state) => ({
      favouriteLocations: { ...state.favouriteLocations, fetched: false },
    }));
  },
  fetchFavouriteLocations: async (params) => {
    set((state) => ({
      favouriteLocations: { ...state.favouriteLocations, fetching: true },
    }));
    // await wait(1000);
    // set((state) => ({
    //   locations: {
    //     ...state.locations,
    //     fetching: false,
    //     fetched: true,
    //     data: d1,
    //     canFetchNext: d1.next_page_url ? true : false,
    //   },
    // }));
    getFavoriteLocations(params)
      .then((res) => {
        set((state) => ({
          favouriteLocations: {
            ...state.favouriteLocations,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteLocations: {
            ...state.favouriteLocations,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchFavouriteLocationsNext: async () => {
    set((state) => ({
      favouriteLocations: { ...state.favouriteLocations, fetchingNext: true },
    }));
    let url = get().favouriteLocations.data.next_page_url;
    // await wait(1000);
    // set((state) => ({
    //   locations: {
    //     ...state.locations,
    //     fetchingNext: false,
    //     canFetchNext: d2.next_page_url ? true : false,
    //     data: {
    //       ...d2,
    //       data: [...state.locations.data.data, ...d2.data],
    //     },
    //   },
    // }));
    getNextLocations(url)
      .then((res) => {
        set((state) => ({
          favouriteLocations: {
            ...state.favouriteLocations,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.favouriteLocations.data,
              data: [...state.favouriteLocations.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteLocations: {
            ...state.favouriteLocations,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
});
