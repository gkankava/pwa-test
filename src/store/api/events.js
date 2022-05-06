import { getEvents, getNextEvents } from "api/lib/events";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const eventsSlice = (set, get) => ({
  events: initialState,
  fetchEvents: async (params) => {
    set((state) => ({
      events: { ...state.events, fetching: true },
    }));
    getEvents(params)
      .then((res) => {
        set((state) => ({
          events: {
            ...state.events,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          events: {
            ...state.events,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchEventsNext: async () => {
    set((state) => ({ events: { ...state.events, fetchingNext: true } }));
    let url = get().events.data.next_page_url;
    getNextEvents(url)
      .then((res) => {
        set((state) => ({
          events: {
            ...state.events,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.events.data,
              data: [...state.events.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          events: {
            ...state.events,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetEventsFetched: () => {
    set((state) => ({
      events: { ...state.events, fetched: false },
    }));
  },
});
