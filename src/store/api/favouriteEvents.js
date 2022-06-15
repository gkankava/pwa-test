import { getFavouriteEvents, getNextEvents } from "api/lib/events";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const favouriteEventsSlice = (set, get) => ({
  favouriteEvents: initialState,
  fetchFavouriteEvents: async () => {
    set((state) => ({
      favouriteEvents: { ...state.favouriteEvents, fetching: true },
    }));
    getFavouriteEvents()
      .then((res) => {
        set((state) => ({
          favouriteEvents: {
            ...state.favouriteEvents,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteEvents: {
            ...state.favouriteEvents,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchFavouriteEventsNext: async () => {
    set((state) => ({
      favouriteEvents: { ...state.favouriteEvents, fetchingNext: true },
    }));
    let url = get().favouriteEvents.data.next_page_url;
    getNextEvents(url)
      .then((res) => {
        set((state) => ({
          favouriteEvents: {
            ...state.favouriteEvents,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.favouriteEvents.data,
              data: [...state.favouriteEvents.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          favouriteEvents: {
            ...state.favouriteEvents,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetFavouriteEventsFetched: () => {
    set((state) => ({
      favouriteEvents: { ...state.favouriteEvents, fetched: false },
    }));
  },
});
