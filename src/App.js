import React, { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Router from "Router";
import { requestForToken } from "./firebase";
import { useStore } from "store";
import { apiCall } from "api";

function App() {
  const version = "1.1.6";
  const storeToken = useStore((state) => state.storeToken);
  const { isAuthenticated } = useStore((state) => state.currentUser);
  const [pushToken, setPushToken] = useState("");
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (isAuthenticated) requestForToken(setPushToken);
    // eslint-disable-next-line
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
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "green",
          padding: "0.1em",
          zIndex: 9999,
          color: "#FFF",
        }}
      >
        {version}
      </div>
      <Router />
    </>
  );
}

export default App;
