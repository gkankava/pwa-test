import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Router from "Router";
import { requestForToken } from "./firebase";
import { useStore } from "store";
import { apiCall } from "api";

function App() {
  const storeToken = useStore((state) => state.storeToken);
  const { isAuthenticated } = useStore((state) => state.currentUser);
  const [pushToken, setPushToken] = useState("");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    requestForToken(setPushToken);
  }, []);
  useEffect(() => {
    if (
      isAuthenticated &&
      pushToken &&
      apiCall.defaults.headers.common["Authorization"]
    )
      storeToken({
        device_key: pushToken,
        device_agent: window.navigator.userAgent,
      });
    //eslint-disable-next-line
  }, [pushToken, isAuthenticated]);
  if (!isLoaded) return null;
  return <Router />;
}

export default App;
