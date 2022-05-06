import React from "react";
import { Keyword } from "ui/components";
import { hasHomeBar } from "utils/device";

function Content({ data, contentVisible }) {
  const { keywords } = data;
  return (
    <div
      className="content"
      style={{
        transform: `translateY(${contentVisible ? 0 : "100%"})`,
        paddingBottom: hasHomeBar() ? "70px" : "50px",
      }}
    >
      <h3>{data.title}</h3>
      <div className="content-container">
        {data.description}
        <div className="keywords-container">
          {keywords &&
            keywords.map((i, k) => <Keyword key={k} label={i.name} />)}
        </div>
      </div>
    </div>
  );
}

export default Content;
