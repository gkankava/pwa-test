import React from "react";

import TabView from "./TabView";
import MapView from "./Map";
import Look from "./Look";
import Profile from "./Profile";
import { hasHomeBar } from "utils/device";

function Content({ activeContent, setActiveContent }) {
  return (
    <div
      className="main-content-container"
      style={{ paddingBottom: hasHomeBar() ? "80px" : "60px" }}
    >
      {activeContent === "tabs" ? (
        <TabView activeContent={activeContent} />
      ) : activeContent === "map" ? (
        <MapView />
      ) : activeContent === "look" ? (
        <Look setActiveContent={setActiveContent} />
      ) : activeContent === "profile" ? (
        <Profile setMainContent={setActiveContent} />
      ) : null}
    </div>
  );
}

export default Content;
