import produce from "immer";
import { subscribeAsync, unSubscribeAsync } from "api/lib/profileEvents";
const initialState = {
  fetching: false,
  fetched: false,
  error: true,
};
export const subscribeSlice = (set, get) => ({
  subscribeEvent: initialState,
  subscribeToLocation: async (id) => {
    subscribeAsync(id)
      .then(() => {
        set(
          produce((state) => {
            state.locationItems.location.user_subscribed_location = true;
          })
        );
      })
      .catch((err) => console.log(err.response));
  },
  unSubscribeToLocation: async (id) => {
    unSubscribeAsync(id)
      .then(() => {
        set(
          produce((state) => {
            state.locationItems.location.user_subscribed_location = false;
          })
        );
      })
      .catch((err) => console.log(err));
  },
});
