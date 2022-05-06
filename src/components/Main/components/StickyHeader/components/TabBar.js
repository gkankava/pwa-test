import React from "react";
import { palette, theme } from "ui";

function TabBar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-bar">
      <div
        className="tab-bar-item"
        onClick={() => setActiveTab(0)}
        style={{
          ...theme.textVariants.nav,
          color: activeTab === 0 ? "white" : palette.whiteDis,
        }}
      >
        Locations
      </div>
      <div
        className="tab-bar-item"
        onClick={() => setActiveTab(1)}
        style={{
          ...theme.textVariants.nav,
          color: activeTab === 1 ? "white" : palette.whiteDis,
        }}
      >
        Events
      </div>
      <div
        className="tab-bar-item"
        onClick={() => setActiveTab(2)}
        style={{
          ...theme.textVariants.nav,
          color: activeTab === 2 ? "white" : palette.whiteDis,
        }}
      >
        News
      </div>
    </div>
  );
}

export default TabBar;
