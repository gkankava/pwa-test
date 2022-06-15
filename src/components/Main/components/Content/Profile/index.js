import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import FavouriteData from "../TabView/components/FavouriteData";
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
        {arr.map((i) => (
          <FavouriteData key={i.toString()} index={i} />
        ))}
      </SwipeableViews>
    </>
  );
}

export default Profile;

const arr = [0, 1, 2];
