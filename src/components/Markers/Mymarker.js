import React from "react";
import { Marker } from "@react-google-maps/api";

import marker_ico from "assets/markers/marker.png";

function Mymarker({ lat, lng }) {
  return (
    <Marker
      icon={{
        url: marker_ico,
        scaledSize: new window.google.maps.Size(30, 35.7),
        labelOrigin: new window.google.maps.Point(15, 45),
      }}
      label={{
        text: "Your Location",
        className: "my-marker-label",
      }}
      position={{ lat, lng }}
    />
  );
}

export default Mymarker;
