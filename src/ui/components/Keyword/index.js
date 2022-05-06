import React from "react";
import { Touchable } from "..";

function Keyword({ label }) {
  return (
    <Touchable className="keyword">
      <div className="dot" />
      <span>{label}</span>
    </Touchable>
  );
}

export default Keyword;
