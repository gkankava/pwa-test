import React from "react";
import { hasHomeBar } from "utils/device";

import tooglePlus from "assets/icons/cutomPage/tooglePlus.png";
import listIco from "assets/icons/cutomPage/listIco.png";
import location from "assets/icons/cutomPage/locationWhite.png";
import couponIcon from "assets/icons/cutomPage/coupon.png";
import star from "assets/icons/cutomPage/starWhite.png";
import starActive from "assets/icons/cutomPage/star_active.png";
import share from "assets/icons/cutomPage/share.png";
import { Touchable } from "ui/components";

function BottomBar({
  onShare,
  openMapModal,
  toogle,
  coupon_count,
  openBsC,
  liked,
  toogleLike,
}) {
  return (
    <div className="bottom-bar" style={{ marginBottom: hasHomeBar() ? 20 : 0 }}>
      <Touchable className="toogle-btn-container" action={toogle}>
        <img src={tooglePlus} alt="toogle-ico-1" />
        <img src={listIco} alt="toogle-ico-2" />
      </Touchable>
      <div className="right-container">
        <Touchable>
          <img src={location} alt="location-ico" />
        </Touchable>
        <div className="divider" />
        {coupon_count && coupon_count > 0 ? (
          <>
            <Touchable>
              <img src={couponIcon} alt="coupon-ico" />
            </Touchable>
            <div className="divider" />
          </>
        ) : null}
        <Touchable action={toogleLike}>
          <img src={liked ? starActive : star} alt="favorite-ico" />
        </Touchable>
        <div className="divider" />
        <Touchable className="share-btn" action={onShare}>
          <img src={share} alt="share-ico" />
          <span>SHARE</span>
        </Touchable>
      </div>
    </div>
  );
}

export default BottomBar;
