import React from "react";

function Container({ children }) {
  return (
    <div style={{ height: "100%", overflowY: "scroll", padding: 10 }}>
      {children}
    </div>
  );
}

export default Container;
