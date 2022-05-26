import React from "react";
import { Keyword } from "ui/components";

import { useStore } from "store";

function KeywordsSection({ data, toogleBs }) {
  const filters = useStore((state) => state.filters);
  const userLocation = useStore((state) => state.userLocation);
  const fetchDataByKewords = useStore((state) => state.fetchDataByKewords);

  const searchByKeyWord = (item) => {
    const params = {
      longitude: userLocation?.longitude,
      latitude: userLocation?.latitude,
      radius: filters?.radius,
      keywords: item.id,
    };
    fetchDataByKewords("locations", params);
    toogleBs(true, "key", "Search");
  };

  return (
    <div className="keywords-container">
      {data.map((i, k) => (
        <Keyword key={k} label={i.name} item={i} action={searchByKeyWord} />
      ))}
    </div>
  );
}

export default KeywordsSection;
