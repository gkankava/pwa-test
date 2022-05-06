import produce from "immer";
import { likeAsync, unLikeAsync } from "api/lib/profileEvents";

export const likeEventSlice = (set, get) => ({
  likeEvent: async (id) => {
    likeAsync("event", id)
      .then(() => {
        set(
          produce((state) => {
            state.eventItems.event.user_favorite_events = true;
          })
        );
      })
      .catch((err) => console.log(err.response));
  },
  unLikeEvent: async (id) => {
    unLikeAsync("event", id)
      .then(() => {
        set(
          produce((state) => {
            state.eventItems.event.user_favorite_events = false;
          })
        );
      })
      .catch((err) => console.log(err.response.data));
  },
});
