import React from "react";

import { getThumb } from "utils/imgUri";
import { formatDistance } from "utils/formatDistance";
import { calcTimeDiff } from "utils/calcTimeDiff";

import { Touchable } from "..";
import Badge from "./Badge";
import SMIcon from "ui/sm-icons";

function DataListItem({ item, action, icon }) {
  return (
    <Touchable
      className="data-list-item"
      action={() => {
        action(item.id);
      }}
      style={{
        position: "relative",
      }}
    >
      <div className="logo-container">
        {item.coupon_count > 0 && <Badge text={item.coupon_count} />}
        <img src={getThumb(item.logo)} alt="list-item-logo" className="logo" />
      </div>

      <div className="text-container">
        <p
          style={{
            fontSize: "0.5em",
            position: "absolute",
            right: "0",
            top: "1em",
            margin: "0",
            color:
              item.business_opening_hours && item.business_opening_hours.is_open
                ? "green"
                : "red",
          }}
        >
          {item.business_opening_hours &&
            (item.business_opening_hours.is_open
              ? `Closes in ${item.business_opening_hours.time_before_close}`
              : `Opens in ${item.business_opening_hours.time_before_open}`)}
        </p>

        <span className="title">{item.title}</span>
        <span className="sub-title">{item.description}</span>
      </div>
      <div className="right-container">
        <SMIcon png name={icon} size={40} />
        {item.distance && (
          <span className="info">{formatDistance(item.distance)}</span>
        )}
        {item.available_locations?.length > 0 && (
          <span className="info">
            {formatDistance(item.available_locations[0].distance)}
          </span>
        )}
        {item.post_start_at && (
          <span className="d-info">
            {calcTimeDiff(item.post_start_at) > 14
              ? item.post_start_at.slice(0, 10)
              : item.post_start_at_for_humans?.slice(0, 10)}
          </span>
        )}
      </div>
    </Touchable>
  );
}

export default DataListItem;
