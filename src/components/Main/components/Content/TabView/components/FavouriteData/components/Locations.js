import React, { useState } from "react";
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
    (state) => state.favouriteLocations
  );
  const fetchLocationsNext = useStore(
    (state) => state.fetchFavouriteLocationsNext
  );

  const [filteredData] = useState(data.data);

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
