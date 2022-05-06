import React from "react";
import { hasHomeBar } from "utils/device";

function Container(props) {
  return (
    <div id="bottom-bar" style={{ height: hasHomeBar() ? "80px" : "60px" }}>
      {props.children}
    </div>
  );
}

export default Container;
