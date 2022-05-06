import React from "react";
import { palette } from "ui";
import { Touchable } from "ui/components";
import { getThumb } from "utils/imgUri";

function ListItem({ item, action }) {
  const openCouponModal = () => {
    action(item);
  };
  return (
    <Touchable className="coupon-list-item" action={openCouponModal}>
      <div className="obj-mask" />
      <img src={getThumb(item.news[0].logo)} alt="coupon-news-logo" />
      <div className="dashed-divider" />
      <div className="content-container">
        <h4 className="cp-header">{item.news[0].title}</h4>
        <div className="price-container">
          {item.type === "money" && (
            <span
              style={{
                fontSize: 14,
                color: "#707070",
                marginTop: 5,
                marginRight: 3,
              }}
            >
              $
            </span>
          )}
          {item.type === "percentage" ? (
            <span style={{ fontSize: 20, color: "#707070" }}>
              {item.percentage_value}
            </span>
          ) : item.type === "money" ? (
            <span style={{ fontSize: 20, color: "#707070" }}>
              {item.money_value || 60}
            </span>
          ) : (
            <span style={{ fontSize: 20, color: "#707070" }}>FREE COUPON</span>
          )}
          {item.type === "percentage" ? (
            <span
              style={{
                fontSize: 14,
                color: "#707070",
                marginTop: 5,
                marginLeft: 3,
              }}
            >
              % OFF
            </span>
          ) : item.type === "money" ? (
            <span
              style={{
                fontSize: 14,
                color: "#707070",
                marginTop: 5,
                marginLeft: 3,
              }}
            >
              COUPON
            </span>
          ) : null}
          {item.type !== "free" && (
            <span
              style={{
                marginLeft: 5,
                fontSize: 14,
                color: "#707070",
                spanDecorationLine: "line-through",
              }}
            >
              {item.previous_price || "100$"}
            </span>
          )}
          {item.type !== "free" && (
            <span
              style={{
                marginLeft: 0,
                fontSize: 20,
                color: palette.green,
              }}
            >
              {item.new_price || "40$"}
            </span>
          )}
        </div>
        <div className="code">CODE: {item.coupon_code}</div>
        <div className="code">Valid until {item.post_end_at}</div>
      </div>
    </Touchable>
  );
}

export default ListItem;
