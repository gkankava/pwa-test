import { setTokenHeader } from "api";
import { authLogin, authRegister, authLogout, authUpdate } from "api/lib/user";
const initialState = {
  isAuthenticated: false,
  user: {},
  fetching: false,
  fetched: false,
  error: null,
};

export const currentUserSlice = (set, get) => ({
  currentUser: initialState,
  setCurrentUser: (currentUser) => {
    set(() => ({ currentUser }));
  },
  loginUser: async (data) => {
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        fetched: false,
        fetching: true,
      },
    }));
    authLogin(data)
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.access_token.token);
        setTokenHeader(res.data.access_token.token);
        set((state) => ({
          currentUser: {
            isAuthenticated: true,
            user: res.data.user,
            fetching: false,
            fetched: true,
            error: null,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          currentUser: {
            ...state.currentUser,
            fetching: false,
            fetched: true,
            error: err.response?.data || "unknown error",
          },
        }));
      });
  },
  logOutUser: async () => {
    authLogout().then((res) => {
      localStorage.removeItem("jwtToken");
      set((state) => ({
        currentUser: initialState,
      }));
      setTokenHeader();
    });
  },
  registerUser: async (data) => {
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        fetched: false,
        fetching: true,
      },
    }));
    authRegister(data)
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.access_token.token);
        setTokenHeader(res.data.access_token.token);
        set((state) => ({
          currentUser: {
            isAuthenticated: true,
            user: res.data.user,
            fetching: false,
            fetched: true,
            error: null,
          },
        }));
      })
      .catch((err) => {
        set((state) => ({
          currentUser: {
            ...state.currentUser,
            fetching: false,
            fetched: true,
            error: err.response?.data || "unknown error",
          },
        }));
      });
  },
  fetchUserData: async () => {},
  updateUser: async (params) => {
    authUpdate(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  },
});
