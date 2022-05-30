import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

import Slide from "./Slide";
import Paginator from "./Paginator";

function Filters() {
  const [index, setIndex] = useState(0);
  return (
    <div className="filters">
      <SwipeableViews
        index={index}
        onChangeIndex={(i) => setIndex(i)}
        enableMouseEvents
        // animateHeight
      >
        {filters.map((i, k) => (
          <Slide key={k} data={i.filters} />
        ))}
      </SwipeableViews>
      <Paginator data={filters} index={index} />
    </div>
  );
}

export default Filters;

const filters = [
  {
    index: 0,
    filters: [
      {
        id: "price",
        title: "price",
        img: require("assets/filters/price.png"),
      },
      {
        id: "near",
        title: "near",
        img: require("assets/filters/near.png"),
      },
      {
        id: "popular",
        title: "popular",
        img: require("assets/filters/popular.png"),
      },
      {
        id: "time",
        title: "time",
        img: require("assets/filters/time.png"),
      },
    ],
  },
  {
    index: 1,
    filters: [
      {
        id: "location",
        title: "location",
        img: require("assets/filters/location.png"),
      },
      {
        id: "transfer",
        title: "transfer",
        img: require("assets/filters/transfer.png"),
      },
      {
        id: "filters",
        title: "filters",
        img: require("assets/filters/filters.png"),
      },
      {
        id: "reset",
        title: "reset",
        img: require("assets/filters/reset.png"),
      },
    ],
  },
];
