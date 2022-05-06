import React from "react";

function Container({ children }) {
  return (
    <div className="fs-modal" style={{ backgroundColor: "white", zIndex: 20 }}>
      {children}
    </div>
  );
}

export default Container;
