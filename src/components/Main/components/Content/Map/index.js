import React, { useState, useRef, useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";

import { useStore } from "store";

import { hasHomeBar } from "utils/device";
import Container from "./components/Container";
import { Mymarker, LocationMarker } from "components/Markers";
import Callout from "./components/Callout";

const mapContainerStyle = {
  width: "100vw",
  height: window.innerHeight - (hasHomeBar() ? 80 : 60),
};

const options = {
  disableDefaultUI: true,
};

function MapView() {
  const currentLocation = useStore((state) => state.userLocation);
  const locations = useStore((state) => state.locations.data.data);
  // const [loading, setLoading] = useState(true);
  // eslint-disable-next-line
  const [region, setRegion] = useState({
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  });

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const [selectedMarker, setSelectedMarker] = useState(false);

  const onFitBounds = () => {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(region);
    locations.forEach((l) => {
      bounds.extend({
        lat: parseFloat(l.latitude),
        lng: parseFloat(l.longitude),
      });
    });
    mapRef.current.fitBounds(bounds);
  };

  const toogleCallOut = (item) => {
    if (selectedMarker && selectedMarker.id === item.id) {
      setSelectedMarker(false);
    } else {
      setSelectedMarker(item);
    }
  };

  const closeCallOut = () => {
    setSelectedMarker(false);
    onFitBounds();
  };

  return (
    <Container>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={options}
        zoom={12}
        center={region}
        onLoad={onMapLoad}
      >
        {locations.map((i, k) => (
          <LocationMarker key={k} item={i} onClick={toogleCallOut} />
        ))}
        <Mymarker
          lat={currentLocation.latitude}
          lng={currentLocation.longitude}
        />
        {selectedMarker && (
          <Callout selectedMarker={selectedMarker} onClose={closeCallOut} />
        )}
      </GoogleMap>
    </Container>
  );
}

export default MapView;
