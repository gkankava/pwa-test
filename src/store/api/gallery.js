import { getGallery } from "api/lib/story";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const gallerySlice = (set, get) => ({
  gallery: initialState,
  resetGalleryFetched: () => {
    set((state) => ({
      gallery: { ...state.gallery, fetched: false },
    }));
  },
  fetchGallery: async (id) => {
    set((state) => ({
      gallery: { ...state.gallery, fetching: true },
    }));

    getGallery(id)
      .then((res) => {
        set((state) => ({
          gallery: {
            ...state.gallery,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          gallery: {
            ...state.gallery,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
});
