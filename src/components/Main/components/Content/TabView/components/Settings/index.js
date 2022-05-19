import React from "react";
import { useStore } from "store";

import Container from "./components/categories/Container";
import CategoriesSkeleton from "./components/categories/CategoriesSkeleton";

import LocationCategories from "./components/data/LocationCategories";
import EventsCategories from "./components/data/EventsCategories";
import NewsCategories from "./components/data/NewsCategories";

function Settings({ index }) {
  const { fetching } = useStore((state) => state.categories);

  if (fetching) {
    return (
      <Container>
        <CategoriesSkeleton />
        <CategoriesSkeleton />
        <CategoriesSkeleton />
      </Container>
    );
  }

  return (
    <Container>
      {index === 0 ? (
        <LocationCategories />
      ) : index === 1 ? (
        <EventsCategories />
      ) : (
        <NewsCategories />
      )}
    </Container>
  );
}

export default Settings;
