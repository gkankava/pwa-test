import React from "react";

import SlideItem from "./SlideItem";

function Slide({ data }) {
  return (
    <div className="filter-slide">
      {data.map((i, k) => (
        <SlideItem key={k} data={i} />
      ))}
    </div>
  );
}

export default Slide;
