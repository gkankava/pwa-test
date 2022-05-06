import React from "react";
import Container from "./components/Container";
import TabBar from "./components/TabBar";
import TabIndicator from "./components/TabIndicator";

function StickyHeader({ activeContent, activeTab, setActiveTab }) {
  if (activeContent === "look") return null;
  return (
    <Container>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabIndicator activeTab={activeTab} />
    </Container>
  );
}

export default StickyHeader;
