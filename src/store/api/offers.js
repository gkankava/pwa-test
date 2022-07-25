import { getOffers, getNextLocations } from "api/lib/locations";

const initialState = {
  data: [],
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
  nextPageUrl: null,
};

export const offersSlice = (set, get) => ({
  offers: initialState,
  fetchOffers: async (id, refer) => {
    if (refer === "events") {
      set((state) => ({
        offers: {
          ...state.offers,
          fetching: true,
        },
      }));
    } else {
      set((state) => ({
        offers: {
          ...state.offers,
          fetchingNext: true,
        },
      }));
    }
    getOffers(id, refer)
      .then((res) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetching: false,
            fetched: true,
            canFetchNext: res.data.next_page_url
              ? true
              : refer === "events"
              ? true
              : false,
            nextPageUrl: res.data.next_page_url ? res.data.next_page_url : null,
            data: [...state.offers.data, ...res.data.data],
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
  fetchOffersNext: async (refer) => {
    let url = get().offers.nextPageUrl;
    set((state) => ({
      offers: {
        ...state.offers,
        fetchingNext: true,
      },
    }));
    getNextLocations(url)
      .then((res) => {
        set((state) => ({
          offers: {
            ...state.offers,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url
              ? true
              : refer === "events"
              ? true
              : false,
            nextPageUrl: res.data.next_page_url ? res.data.next_page_url : null,
            data: [...state.offers.data, ...res.data.data],
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
  resetSlice: () => {
    set((state) => ({
      offers: initialState,
    }));
  },
});
