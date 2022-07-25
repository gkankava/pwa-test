import { setTokenHeader } from "api";
import {
  authLogin,
  authRegister,
  authLogout,
  authUpdate,
  getMe,
} from "api/lib/user";
const initialState = {
  isAuthenticated: localStorage.getItem("jwtToken") ? true : false,
  user: {},
  fetching: false,
  fetched: false,
  error: null,
};

export const currentUserSlice = (set, get) => ({
  currentUser: initialState,
  setCurrentUser: (currentUser) => {
    console.log(currentUser);
    set(() => ({
      currentUser: {
        ...currentUser,
        fetched: false,
        fetching: true,
        isAuthenticated: true,
      },
    }));
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
      setTokenHeader();
      set((state) => ({
        currentUser: { ...initialState, isAuthenticated: false },
      }));
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
  fetchUserData: async () => {
    set((state) => ({
      currentUser: { ...state.currentUser, fetching: true },
    }));

    getMe()
      .then((res) => {
        set((state) => {
          console.log(state.currentUser);
          return {
            currentUser: {
              ...state.currentUser,
              fetching: false,
              fetched: true,
              user: res.data.user,
            },
          };
        });
      })
      .catch((err) => {
        set((state) => ({
          currentUser: {
            ...state.currentUser,
            fetching: false,
            error: err.response,
          },
        }));
      });
  },
  updateUser: async (params) => {
    authUpdate(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  },
});
