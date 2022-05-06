import React from "react";

function TabIndicator({ activeTab }) {
  const width = window.innerWidth;
  return (
    <div className="bar">
      <div
        className="handle"
        style={{
          transform: `translateX(${activeTab * (width / 3)}px)`,
        }}
      />
    </div>
  );
}

export default TabIndicator;
