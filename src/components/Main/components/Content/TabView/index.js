import React, { useState } from "react";
import { useStore } from "store";
import SwipeableViews from "react-swipeable-views";

import StickyHeader from "../../StickyHeader";

import Data from "./components/Data";
import Search from "./components/Search";
import SettingsSharedTab from "./components/Settings/SettingsSharedTab";
import { palette } from "ui";

function TabView({ activeContent }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentScene = useStore((state) => state.currentScene);
  return (
    <>
      <StickyHeader
        activeContent={activeContent}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {currentScene === "settings" && <SettingsSharedTab />}
      <SwipeableViews
        index={activeTab}
        animateHeight
        enableMouseEvents
        onChangeIndex={(i) => setActiveTab(i)}
        style={{ minHeight: window.innerHeight - 110 - 80 }}
        slideStyle={{
          maxWidth: window.innerWidth,
          minHeight: window.innerHeight - 110 - 80,
        }}
      >
        {currentScene === "tabView"
          ? arr.map((i) => <Data key={i.toString()} index={i} />)
          : currentScene === "search"
          ? arr.map((i) => (
              <Search
                key={i.toString() + "search"}
                id={i}
                activeTab={activeTab}
              />
            ))
          : arr.map((i) => (
              <div
                key={i.toString() + "settings"}
                style={{ height: "600px", background: palette.blue }}
              ></div>
            ))}
      </SwipeableViews>
    </>
  );
}

export default TabView;

const arr = [0, 1, 2];
