import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView, GridView, CoverView } from "ui/components";

function Locations() {
  let navigate = useNavigate();
  const action = (id) => {
    navigate(`/location/${id}`);
  };
  const look = useStore((state) => state.look);
  const { data, canFetchNext, fetchingNext } = useStore(
    (state) => state.locations
  );
  const fetchLocationsNext = useStore((state) => state.fetchLocationsNext);

  const categories = useStore((state) => state.filters.locations.categories);

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
        <ListView data={filteredData} action={action} />
      ) : look === "grid" ? (
        <GridView data={filteredData} action={action} />
      ) : (
        <CoverView data={filteredData} action={action} />
      )}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchLocationsNext}
      />
    </>
  );
}

export default Locations;
