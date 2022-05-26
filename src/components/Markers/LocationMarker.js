import React from "react";
import { Marker } from "@react-google-maps/api";

import marker_ico from "assets/markers/marker.png";

function LocationMarker({ item, onClick = () => {} }) {
  return (
    <Marker
      icon={{
        url:
          require(`../../ui/sm-icons/icons/png/${item?.category?.icon}.png`) ||
          marker_ico,
        scaledSize: new window.google.maps.Size(35, 35),
      }}
      position={{
        lat: parseFloat(item.latitude),
        lng: parseFloat(item.longitude),
      }}
      onClick={() => {
        onClick(item);
      }}
    />
  );
}

export default LocationMarker;
