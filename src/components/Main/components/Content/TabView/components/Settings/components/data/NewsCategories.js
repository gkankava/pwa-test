import React from "react";
import { useStore } from "store";

import CategoryItem from "../categories/CategoryItem";

function NewsCategories() {
  const {
    data: { data },
    canFetchNext,
    fetchingNext,
  } = useStore((state) => state.categories.news);

  const list = useStore((state) => state.filters.news.categories);
  const toogleCategory = useStore((state) => state.toogleCategory);

  const toogle = (id) => {
    toogleCategory("news", id);
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

export default NewsCategories;
