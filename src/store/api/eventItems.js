import produce from "immer";
import { getEvent } from "api/lib/events";

const initialState = {
  lastEvent: false,
  data: [],
  event: false,
  fetching: false,
  fetched: false,
  error: null,
};

export const eventItemsSlice = (set, get) => ({
  eventItems: initialState,
  fetchEvent: async (id, coords) => {
    set(
      // produce((state) => {
      //   state.eventItems.fetching = true;
      // })
      () => ({
        eventItems: {
          ...initialState,
          fetching: true,
        },
      })
    );
    getEvent(id, coords)
      .then((res) => {
        set(
          produce((state) => {
            state.eventItems.fetching = false;
            state.eventItems.fetched = true;
            state.eventItems.error = null;
            state.eventItems.data.push(res.data);
            state.eventItems.lastEvent = res.data;
            state.eventItems.event = res.data;
          })
        );
      })
      .catch((err) => {
        set(
          produce((state) => {
            state.eventItems.fetching = false;
            state.eventItems.error = err.response;
          })
        );
      });
  },
  setlastEvent: (item) => {
    set(
      produce((state) => {
        state.eventItems.lastEvent = item;
      })
    );
  },
});
