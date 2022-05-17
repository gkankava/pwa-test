import React from "react";

import Container from "./components/categories/Container";
import CategoriesSkeleton from "./components/categories/CategoriesSkeleton";

import SMIcon from "sm-icon";

function Settings({ index }) {
  return (
    <Container>
      <SMIcon name="heart" />
      <CategoriesSkeleton />
      <CategoriesSkeleton />
      <CategoriesSkeleton />
    </Container>
  );
}

export default Settings;
