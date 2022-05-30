import { getDataByKeword, getNextPage } from "api/lib/full";

const initialState = {
  data: false,
  fetching: false,
  fetched: false,
  error: null,
  canFetchNext: false,
  fetchingNext: false,
};

export const byKewordsSlise = (set, get) => ({
  dataByKewords: initialState,
  fetchDataByKewords: async (refer, params) => {
    set(() => ({ dataByKewords: { ...initialState, fetching: true } }));
    getDataByKeword({ refer, params })
      .then((res) => {
        set((state) => ({
          dataByKewords: {
            ...state.dataByKewords,
            fetching: false,
            fetched: true,
            data: res.data,
            canFetchNext: res.data.next_page_url ? true : false,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          dataByKewords: {
            ...state.dataByKewords,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  fetchDataByKewordNext: async () => {
    let url = get().dataByKewords.data.next_page_url;
    set((state) => ({
      dataByKewords: { ...state.dataByKewords, fetchingNext: true },
    }));
    getNextPage(
      url.then((res) => {
        set((state) => ({
          dataByKewords: {
            ...state.dataByKewords,
            fetchingNext: false,
            canFetchNext: res.data.next_page_url ? true : false,
            data: {
              ...state.dataByKewords.data,
              data: [...state.dataByKewords.data.data, ...res.data.data],
            },
          },
        }));
      })
    ).catch((err) => {
      set((state) => ({
        dataByKewords: {
          ...state.dataByKewords,
          fetchingNext: false,
          error: err.response,
        },
      }));
    });
  },
});
