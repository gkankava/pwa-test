import React from "react";

function HeaderContainer({ children }) {
  return (
    <div
      className="tab-bar-container tab-bar"
      style={{
        padding: `10px 0 `,
        flexDirection: "column",
        paddingBottom: 0,
      }}
    >
      {children}
    </div>
  );
}

export default HeaderContainer;
