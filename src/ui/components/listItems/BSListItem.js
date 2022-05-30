import React from "react";

import { getOriginal } from "utils/imgUri";
import { formatDistance } from "utils/formatDistance";
import { calcTimeDiff } from "utils/calcTimeDiff";

import { Touchable } from "..";
import Badge from "./Badge";
import SMIcon from "ui/sm-icons";

function BSListItem({ item, action, icon }) {
  return (
    <Touchable
      className="bs-list-item"
      action={() => {
        action(item);
      }}
    >
      <div className="logo-container">
        {item.coupon_count > 0 && <Badge text={item.coupon_count} />}
        <img
          src={getOriginal(item.logo)}
          alt="list-item-logo"
          className="logo"
        />
      </div>
      <div className="text-container">
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

export default BSListItem;
