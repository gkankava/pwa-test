import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView, GridView, CoverView } from "ui/components";

function Events() {
  let navigate = useNavigate();
  const action = (id) => {
    navigate(`/event/${id}`);
  };

  const look = useStore((state) => state.look);
  const { data, canFetchNext, fetchingNext } = useStore(
    (state) => state.events
  );
  const fetchEventsNext = useStore((state) => state.fetchEventsNext);

  const categoriesList = useStore((state) => state.categories.events.data.data);

  const categories = useStore((state) => state.filters.events.categories);

  const [filteredData, setFilteredData] = useState(data.data);

  useEffect(() => {
    if (categories.length > 0) {
      let newArr = filteredData.filter((i) =>
        categories.includes(i.category_id)
      );
      setFilteredData(newArr);
    }
    // eslint-disable-next-line
  }, [categories]);

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
        fetchNext={fetchEventsNext}
      />
    </>
  );
}

export default Events;
