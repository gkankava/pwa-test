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
  const { fetching } = useStore((state) => state.locations);

  const [filteredData, setFilteredData] = useState(data.data);
  const fetchEvents = useStore((state) => state.fetchEvents);
  const userLocation = useStore((state) => state.userLocation);
  const filters = useStore((state) => state.filters);
  const search = useStore((state) => state.filters.events.search);

  useEffect(() => {
    const params = {
      longitude: userLocation?.longitude || 8.514803,
      latitude: userLocation?.latitude || 48.5275439,
      radius: filters?.radius || 5,
      orderBy: filters?.orderBy || "updated_at",
      searchQuery: search,
    };
    fetchEvents(params);
    // eslint-disable-next-line
  }, [search]);
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
