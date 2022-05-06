import React from "react";

import Container from "./components/Container";
import ProfileHeader from "./components/ProfileHeader";
import TabBar from "./components/TabBar";
import TabIndicator from "./components/TabIndicator";

function StickyHeader({ activeTab, setActiveTab, setMainContent }) {
  return (
    <Container>
      <ProfileHeader setMainContent={setMainContent} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabIndicator activeTab={activeTab} />
    </Container>
  );
}

export default StickyHeader;
