import React from "react";
import { Keyword } from "ui/components";
import { hasHomeBar } from "utils/device";

import { useStore } from "store";

function Content({ data, contentVisible, toogleBs, refer }) {
  const { keywords } = data;

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
    fetchDataByKewords(refer, params);
    toogleBs(true, "key", "Search");
  };

  return (
    <div
      className="content"
      style={{
        transform: `translateY(${contentVisible ? 0 : "100%"})`,
        paddingBottom: hasHomeBar() ? "70px" : "50px",
      }}
    >
      <h3>{data.title}</h3>
      <div className="content-container">
        {data.description}
        <div className="keywords-container">
          {keywords &&
            keywords.map((i, k) => (
              <Keyword
                key={k}
                label={i.name}
                item={i}
                action={searchByKeyWord}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
