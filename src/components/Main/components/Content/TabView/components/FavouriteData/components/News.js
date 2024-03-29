import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView, GridView, CoverView } from "ui/components";

function News() {
  let navigate = useNavigate();
  const action = (id) => {
    navigate(`/news/${id}`);
  };

  const look = useStore((state) => state.look);
  const { data, canFetchNext, fetchingNext } = useStore(
    (state) => state.favouriteNews
  );
  const fetchNewsNext = useStore((state) => state.fetchNewsNext);

  const categoriesList = useStore((state) => state.categories.news.data.data);

  const [filteredData] = useState(data.data);

  if (!data.data) return null;

  return (
    <>
      {look === "list" ? (
        <ListView
          data={filteredData}
          action={action}
          categoriesList={categoriesList}
        />
      ) : look === "grid" ? (
        <GridView data={filteredData} action={action} />
      ) : (
        <CoverView data={filteredData} action={action} />
      )}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchNewsNext}
      />
    </>
  );
}

export default News;
