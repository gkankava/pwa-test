import { getLocations, getNextLocations } from "api/lib/locations";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const locationsSlice = (set, get) => ({
  locations: initialState,
  resetLocationsFetched: () => {
    set((state) => ({
      locations: { ...state.locations, fetched: false },
    }));
  },
  fetchLocations: async (params) => {
    set((state) => ({
      locations: { ...state.locations, fetching: true },
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
    getLocations(params)
      .then((res) => {
        set((state) => ({
          locations: {
            ...state.locations,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          locations: {
            ...state.locations,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchLocationsNext: async () => {
    set((state) => ({ locations: { ...state.locations, fetchingNext: true } }));
    let url = get().locations.data.next_page_url;
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
          locations: {
            ...state.locations,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.locations.data,
              data: [...state.locations.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          locations: {
            ...state.locations,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
});
