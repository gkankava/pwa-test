import React from "react";
import { getOriginal } from "utils/imgUri";

function StickyHeader({ data, offsetY }) {
  const { logo, title, sub_title } = data;

  return (
    <div className="sticky-header">
      <img src={getOriginal(logo)} alt="location-logo" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="sub-title">{sub_title}</div>
      </div>
    </div>
  );
}

export default StickyHeader;
