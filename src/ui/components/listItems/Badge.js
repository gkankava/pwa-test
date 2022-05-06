import React from "react";

import couponIco from "assets/icons/coupon.png";
function Badge({ text }) {
  return (
    <div className="list-item-badge">
      <img src={couponIco} alt="coupon-ico" />
      <div className="text-wrapper">{text}</div>
    </div>
  );
}

export default Badge;
