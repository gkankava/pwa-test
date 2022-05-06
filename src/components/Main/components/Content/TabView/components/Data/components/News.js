import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView, GridView, CoverView } from "ui/components";

function News() {
  let navigate = useNavigate();
  const action = (id) => {
    navigate(`/news/${id}`);
  };

  const look = useStore((state) => state.look);
  const { data, canFetchNext, fetchingNext } = useStore((state) => state.news);
  const fetchNewsNext = useStore((state) => state.fetchNewsNext);

  if (!data.data) return null;

  return (
    <>
      {look === "list" ? (
        <ListView data={data.data} action={action} />
      ) : look === "grid" ? (
        <GridView data={data.data} action={action} />
      ) : (
        <CoverView data={data.data} action={action} />
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
