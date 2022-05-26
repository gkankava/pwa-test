import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Router from "Router";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return null;
  return <Router />;
}

export default App;
