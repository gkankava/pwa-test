import axios from "axios";

const REACT_APP_API_URL = "https://demo-api.yezzgo.de/";
const REACT_APP_API_VERSION = "v1";

const baseURL = REACT_APP_API_URL + REACT_APP_API_VERSION;

const bareApiCall = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "de",
  },
});

const apiCall = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "de",
  },
});

const mapsApi = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api",
});

const setTokenHeader = (token) => {
  if (token) {
    apiCall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    bareApiCall.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    apiCall.defaults.headers.common["Authorization"] = `Bearer `;
    bareApiCall.defaults.headers.common["Authorization"] = `Bearer `;
  }
};

export { bareApiCall, apiCall, mapsApi, setTokenHeader };
