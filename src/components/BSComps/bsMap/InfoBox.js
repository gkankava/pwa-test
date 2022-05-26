import React from "react";

import { Touchable } from "ui/components";
import directions_ico from "assets/icons/directions.png";
import { getThumb } from "utils/imgUri";

function InfoBox({ data, onNavigate }) {
  const { logo, title, sub_title } = data;
  return (
    <Touchable
      style={{ width: "70%" }}
      action={() => {
        onNavigate(data);
      }}
    >
      <div className="bs-map-info-box">
        <img src={getThumb(logo)} alt="company-logo" className="logo" />
        <div className="info-container">
          <h2>{title}</h2>
          <h3>{sub_title}</h3>
        </div>
        <img src={directions_ico} alt="directions" className="directions-ico" />
      </div>
    </Touchable>
  );
}

export default InfoBox;
