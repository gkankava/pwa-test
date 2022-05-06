import { getOffers, getNextLocations } from "api/lib/locations";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const offersSlice = (set, get) => ({
  offers: initialState,
  fetchOffers: async (id) => {
    getOffers(id)
      .then((res) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchOffersNext: async () => {
    let url = get().offers.data.next_page_url;
    getNextLocations(url)
      .then((res) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.offers.data,
              data: [...state.offers.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
});
