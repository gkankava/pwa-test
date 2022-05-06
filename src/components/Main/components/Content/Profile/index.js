import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import StickyHeader from "./components/StickyHeader";

function Profile({ setMainContent }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <StickyHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setMainContent={setMainContent}
      />
      <SwipeableViews
        index={activeTab}
        animateHeight
        enableMouseEvents
        onChangeIndex={(i) => setActiveTab(i)}
      >
        <div style={{ height: "600px", background: "white" }}>
          slide n°{activeTab}
        </div>
        <div style={{ height: "800px", background: "white" }}>
          slide n°{activeTab}
        </div>
        <div style={{ height: "1200px", background: "white" }}>
          slide n°{activeTab}
        </div>
      </SwipeableViews>
    </>
  );
}

export default Profile;
