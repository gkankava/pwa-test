import React from "react";
import { InfoBox } from "@react-google-maps/api";
import { getThumb } from "utils/imgUri";

import { Button } from "ui/components";
import { useNavigate } from "react-router-dom";
import { showLocation } from "utils/mapLink";

function Callout({ selectedMarker }) {
  const {
    gallery: { data: images },
    id,
    logo,
    title,
    sub_title,
    phone_number,
    postal_code,
    web_page,
    country,
    city,
    state,
    street,
    street_number,
  } = selectedMarker;
  const navigate = useNavigate();
  const openMaps = () => {
    showLocation({
      lat: parseFloat(selectedMarker.latitude),
      lng: parseFloat(selectedMarker.longitude),
    });
  };
  const visitPage = () => {
    navigate(`/location/${id}`);
  };
  return (
    <InfoBox
      position={{
        lat: parseFloat(selectedMarker.latitude),
        lng: parseFloat(selectedMarker.longitude),
      }}
      options={{
        boxStyle: {
          boxShadow: "0px 7px 29px -4px rgba(161,156,168,1)",
        },
        closeBoxURL: "",
        enableEventPropagation: true,
        maxWidth: 600,
      }}
    >
      <div className="marker-callout">
        <img src={getThumb(images[0].image)} alt="cover" className="cover" />
        <div className="header">
          <img src={getThumb(logo)} alt="logo" className="logo" />
          <div className="header-content">
            <h2>{title}</h2>
            <h3>{sub_title}</h3>
          </div>
        </div>
        <div className="content">
          <div>
            <a href={`tel:${phone_number}`}>{phone_number}</a>
          </div>
          <a href={web_page} target="_blank" rel="noopener noreferrer">
            {web_page}
          </a>

          <div>
            {street}, {street_number}
          </div>
          <div>
            {country}, {state}, {city}, {postal_code}
          </div>
        </div>
        <div className="btn-container">
          <Button
            label="Navigate"
            className="map-callout-btn"
            action={openMaps}
          />
          <Button
            label="Visit"
            type="secondary"
            className="map-callout-btn"
            action={visitPage}
          />
        </div>
      </div>
    </InfoBox>
  );
}

export default Callout;
