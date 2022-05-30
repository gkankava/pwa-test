import React from "react";

import Container from "./components/Container";
import TextSection from "./components/TextSection";

import KeywordsSection from "./components/KeywordsSection";
import ListSection from "./components/ListSection";

function Content({ data, toogleBs, subscribe, subscribed, unSubscribe }) {
  return (
    <Container>
      <TextSection data={data} />
      <KeywordsSection data={data.keywords} toogleBs={toogleBs} />
      <ListSection
        data={data}
        toogleBs={toogleBs}
        subscribed={subscribed}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
    </Container>
  );
}

export default Content;
