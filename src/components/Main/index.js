import React, { useState } from "react";

import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import { PreCacheData } from "hooks/preCacheData";
import { AppLoading } from "ui/components";
import { Helmet } from "react-helmet";

function Main() {
  const [isReady] = PreCacheData();
  const [activeContent, setActiveContent] = useState("tabs");

  if (!isReady) return <AppLoading size="fs" />;

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Yezzgo App" />
        <meta
          property="og:description"
          content="YezzGo, YezzFun for everybody."
        />
        <meta
          property="og:image"
          content="https://static.yezzgo.de/images/original/HmF7IY22YsJ6JlUcA7b404GK1Gbu1CBGQqHYyJ4i.jpeg"
        />
      </Helmet>
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
