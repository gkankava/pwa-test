import React from "react";
import { useStore } from "store";

import Container from "./components/categories/Container";
import CategoriesSkeleton from "./components/categories/CategoriesSkeleton";

import LocationCategories from "./components/data/LocationCategories";
import EventsCategories from "./components/data/EventsCategories";
import NewsCategories from "./components/data/NewsCategories";
import { TextInput } from "ui/components";
import searchIco from "assets/icons/search_ico_2.png";

function Settings({ index }) {
  const setSearch = useStore((state) => state.setSearch);
  const search = useStore((state) =>
    index === 0
      ? state.filters.locations.search
      : index === 1
      ? state.filters.events.search
      : state.filters.news.search
  );

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
      <form style={{ marginBottom: "20px" }}>
        <TextInput
          id="query"
          name="query"
          placeholder="Suchbegrif eingeben"
          icoRight={searchIco}
          style={{ marginBottom: "10px" }}
          value={search}
          onChange={(e) => {
            if (index === 0) setSearch("locations", e.target.value);
            if (index === 1) setSearch("events", e.target.value);
            if (index === 2) setSearch("news", e.target.value);
          }}
        />
      </form>
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
