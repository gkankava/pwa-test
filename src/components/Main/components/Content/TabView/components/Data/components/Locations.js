import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import {
  IOTrigger,
  ListView,
  GridView,
  CoverView,
  AppLoading,
} from "ui/components";

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
  const fetchLocations = useStore((state) => state.fetchLocations);
  const { fetching } = useStore((state) => state.locations);

  const userLocation = useStore((state) => state.userLocation);
  const filters = useStore((state) => state.filters);
  const search = useStore((state) => state.filters.locations.search);

  useEffect(() => {
    const params = {
      longitude: userLocation?.longitude || 8.514803,
      latitude: userLocation?.latitude || 48.5275439,
      radius: filters?.radius || 5,
      orderBy: filters?.orderBy || "updated_at",
      searchQuery: search,
    };
    fetchLocations(params);
    // eslint-disable-next-line
  }, [search]);

  const categories = useStore((state) => state.filters.locations.categories);
  const [filteredData, setFilteredData] = useState(data.data);
  useEffect(() => {
    if (categories.length > 0) {
      let newArr = data.data.filter((i) => categories.includes(i.category_id));
      setFilteredData(newArr);
    }
    setFilteredData(data.data);

    // eslint-disable-next-line
  }, [categories, data]);

  if (!data.data || fetching) return <AppLoading />;

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
