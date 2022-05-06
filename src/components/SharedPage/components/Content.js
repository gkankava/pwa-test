import React from "react";
import { hasHomeBar } from "utils/device";

function Content({ data, contentVisible }) {
  const { availability, keywords } = data;
  return (
    <div
      className="content"
      style={{
        transform: `translateY(${contentVisible ? 0 : "100%"})`,
        paddingBottom: hasHomeBar() ? "70px" : "50px",
      }}
    >
      <div></div>
    </div>
  );
}

export default Content;
