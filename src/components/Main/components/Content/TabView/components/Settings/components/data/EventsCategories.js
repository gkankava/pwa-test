import React from "react";
import { useStore } from "store";

import CategoryItem from "../categories/CategoryItem";

function EventsCategories() {
  const {
    data: { data },
    canFetchNext,
    fetchingNext,
  } = useStore((state) => state.categories.events);

  const list = useStore((state) => state.filters.events.categories);
  const toogleCategory = useStore((state) => state.toogleCategory);

  const toogle = (id) => {
    toogleCategory("events", id);
  };

  return (
    <>
      {data.map((i, k) => (
        <CategoryItem
          key={k}
          item={i}
          active={list.includes(i.id)}
          toogle={toogle}
        />
      ))}
    </>
  );
}

export default EventsCategories;
