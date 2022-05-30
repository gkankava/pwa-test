import React from "react";

import heart from "assets/icons/locationList/heart.png";
import location from "assets/icons/locationList/location.png";

function SocialInfoSection({ sCount, cICount }) {
  return (
    <div className="soc-info-container">
      <span>
        <img src={heart} alt="followers" /> {sCount}
      </span>
      <span>
        <img src={location} alt="check-in" /> {cICount}
      </span>
    </div>
  );
}

export default SocialInfoSection;
