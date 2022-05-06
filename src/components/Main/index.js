import React, { useState } from "react";

import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import { PreCacheData } from "hooks/preCacheData";
import { AppLoading } from "ui/components";

function Main() {
  const [isReady] = PreCacheData();
  const [activeContent, setActiveContent] = useState("tabs");

  if (!isReady) return <AppLoading size="fs" />;

  return (
    <>
      <Header activeContent={activeContent} />
      <Content
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <BottomBar
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
    </>
  );
}

export default Main;
