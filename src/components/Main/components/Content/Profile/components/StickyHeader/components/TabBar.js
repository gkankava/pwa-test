import React from "react";

import starIco from "assets/icons/star2.png";
import heartIco from "assets/icons/heart.png";
import anouIco from "assets/icons/profile/anou.png";
import { Touchable } from "ui/components";

function TabBar({ activeTab, setActiveTab }) {
  return (
    <div className="tab-bar">
      <Touchable className="tab-bar-item" action={() => setActiveTab(0)}>
        <img
          src={starIco}
          alt="nav-ico"
          style={{ opacity: activeTab === 0 ? 1 : 0.8 }}
        />
      </Touchable>
      <Touchable className="tab-bar-item" action={() => setActiveTab(1)}>
        <img
          src={heartIco}
          alt="nav-ico"
          style={{ opacity: activeTab === 1 ? 1 : 0.8 }}
        />
      </Touchable>
      <Touchable className="tab-bar-item" action={() => setActiveTab(2)}>
        <img
          src={anouIco}
          alt="nav-ico"
          style={{ opacity: activeTab === 2 ? 1 : 0.8 }}
        />
      </Touchable>
    </div>
  );
}

export default TabBar;
