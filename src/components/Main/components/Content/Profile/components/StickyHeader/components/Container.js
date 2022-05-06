import React from "react";

function Container({ children }) {
  return (
    <div
      className="tab-bar-container tab-bar"
      style={{
        padding: `10px 0 0 `,
        flexDirection: "column",
        paddingBottom: 0,
      }}
    >
      {children}
    </div>
  );
}

export default Container;
