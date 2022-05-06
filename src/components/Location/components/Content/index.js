import React from "react";

import Container from "./components/Container";
import TextSection from "./components/TextSection";
import ListSection from "./components/ListSection";

function Content({ data, setBs, subscribe, subscribed, unSubscribe }) {
  return (
    <Container>
      <TextSection data={data} />
      <ListSection
        data={data}
        setBs={setBs}
        subscribed={subscribed}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
    </Container>
  );
}

export default Content;
