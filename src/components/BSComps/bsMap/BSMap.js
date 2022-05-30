import React, { useState, useRef, useCallback, useEffect } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { Mymarker, LocationMarker } from "components/Markers";

import { showLocation } from "utils/mapLink";

import { useStore } from "store";
import InfoSwiper from "./InfoSwiper";

const mapContainerStyle = {
  width: "100vw",
  height: window.innerHeight / 2 - 50,
};

const options = {
  disableDefaultUI: true,
};

function BSMap({ locations }) {
  const currentLocation = useStore((state) => state.userLocation);
  const [region] = useState({
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  });
  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    fitMapBounds();
    // eslint-disable-next-line
  }, []);

  const fitMapBounds = () => {
    const padding = {
      top: 10,
      right: 10,
      bottom: 70,
      left: 10,
    };
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(region);
    bounds.extend({
      lat: parseFloat(locations[activeLocation].latitude),
      lng: parseFloat(locations[activeLocation].longitude),
    });
    mapRef.current.fitBounds(bounds, padding);
  };

  const onNavigate = (item) => {
    showLocation({
      lat: parseFloat(item.latitude),
      lng: parseFloat(item.longitude),
    });
  };

  const [activeLocation, setActiveLocation] = useState(0);
  useEffect(() => {
    if (mapRef.current) {
      fitMapBounds();
    }
    // eslint-disable-next-line
  }, [activeLocation]);

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        options={options}
        zoom={12}
        center={region}
        onLoad={onMapLoad}
      >
        {locations.map((i, k) => (
          <LocationMarker key={k} item={i} />
        ))}
        <Mymarker
          lat={currentLocation.latitude}
          lng={currentLocation.longitude}
        />
      </GoogleMap>
      <div className="map-overlay">
        <InfoSwiper
          locations={locations}
          onNavigate={onNavigate}
          setActiveLocation={setActiveLocation}
        />
      </div>
    </>
  );
}

export default BSMap;
