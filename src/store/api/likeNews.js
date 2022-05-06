import produce from "immer";
import { likeAsync, unLikeAsync } from "api/lib/profileEvents";

export const likeNewsSlice = (set, get) => ({
  likeNews: async (id) => {
    likeAsync("news", id)
      .then(() => {
        set(
          produce((state) => {
            state.newsItems.newsItem.user_favorite_news = true;
          })
        );
      })
      .catch((err) => console.log(err.response));
  },
  unLikeNews: async (id) => {
    unLikeAsync("news", id)
      .then(() => {
        set(
          produce((state) => {
            state.newsItems.newsItem.user_favorite_news = false;
          })
        );
      })
      .catch((err) => console.log(err.response.data));
  },
});
