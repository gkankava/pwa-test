import { getCouponsByNews, getNextCoupons } from "api/lib/coupons";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};
export const couponsSlice = (set, get) => ({
  coupons: initialState,
  fetchCouponsByNews: async (id) => {
    set(() => ({ coupons: { ...initialState, fetching: true } }));
    getCouponsByNews(id)
      .then((res) => {
        set((state) => ({
          coupons: {
            ...state.coupons,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          coupons: {
            ...state.coupons,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchCouponsNext: async () => {
    set((state) => ({ coupons: { ...state.coupons, fetchingNext: true } }));
    let url = get().coupons.data.next_page_url;
    getNextCoupons(url)
      .then((res) => {
        set((state) => ({
          events: {
            ...state.coupons,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.coupons.data,
              data: [...state.coupons.data.data, ...res.data.data],
            },
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          coupons: {
            ...state.coupons,
            fetchingNext: false,
            error: err.response,
          },
        }));
      });
  },
  resetCoupons: () => {
    set(() => ({ coupons: initialState }));
  },
});
