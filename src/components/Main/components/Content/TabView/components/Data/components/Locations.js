import React from "react";
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
        fetchNext={fetchLocationsNext}
      />
    </>
  );
}

export default Locations;
