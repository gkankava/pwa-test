import React from "react";
import { useStore } from "store";

import CategoryItem from "../categories/CategoryItem";

function LocationCategories() {
  const {
    data: { data },
    canFetchNext,
    fetchingNext,
  } = useStore((state) => state.categories.locations);

  const list = useStore((state) => state.filters.locations.categories);
  const toogleCategory = useStore((state) => state.toogleCategory);

  const toogle = (id) => {
    toogleCategory("locations", id);
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

export default LocationCategories;
