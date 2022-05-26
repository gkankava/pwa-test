import React from "react";

function BSScrollView(props) {
  return (
    <div style={{ height: "100%", overflowY: "auto", paddingBottom: 80 }}>
      {props.children}
    </div>
  );
}

export default BSScrollView;
