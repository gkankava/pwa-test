import React from "react";
import { useNavigate } from "react-router-dom";
import { getOriginal } from "utils/imgUri";

function StickyHeader({ data, offsetY }) {
  const { id, logo, title, sub_title, pinnedGalleries } = data;
  const navigate = useNavigate();
  return (
    <div className="sticky-header">
      <div
        onClick={() =>
          pinnedGalleries.length
            ? navigate(`/story/${id}`, { state: { pinnedGalleries } })
            : null
        }
        className={pinnedGalleries.length ? "rainbow" : "ml-rainbow"}
      >
        <img src={getOriginal(logo)} alt="location-logo" />
      </div>
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="sub-title">{sub_title}</div>
      </div>
    </div>
  );
}

export default StickyHeader;
