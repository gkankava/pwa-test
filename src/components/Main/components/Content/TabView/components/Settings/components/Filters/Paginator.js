import React from "react";

function Paginator({ data, index }) {
  return (
    <div className="filter-slider-paginator">
      {data.map((i, k) => (
        <div className="dot" style={{ opacity: index === k ? 1 : 0.5 }} />
      ))}
    </div>
  );
}

export default Paginator;
