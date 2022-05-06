import React, { useState } from "react";

import Header from "./components/Header";
import GallerySwiper from "./components/GallerySwiper";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";

import { webShare } from "services";
import { BSModal } from "ui/components";
import BsCoupons from "./components/BsCoupons";
import CouponModalFS from "./components/CouponModal";

function SharedPage({ data, refer, liked, toogleLike }) {
  const { title, description, id, coupon_count, gallery } = data;

  const [contentVisible, setContentVisible] = useState(true);
  const [bs, setBs] = useState(false);
  const [bsC, setBsC] = useState(false);

  const toogleContent = () => {
    setContentVisible((prev) => !prev);
  };

  const onShare = () => {
    webShare(title, description, id)
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  const openMapModal = () => {
    setBs(true);
  };
  const openCouponsModal = () => {
    setBsC(true);
  };

  const [couponModal, setCouponModal] = useState({
    active: false,
    data: false,
  });

  const openCouponModal = (data) => {
    setCouponModal({ active: true, data });
  };

  const closeCouponModal = () => {
    setCouponModal({ active: false, data: false });
  };

  return (
    <div className="shared-page" style={{ height: window.innerHeight }}>
      {couponModal.active && (
        <CouponModalFS data={couponModal.data} closeModal={closeCouponModal} />
      )}
      <Header data={data} />
      <GallerySwiper data={gallery} />
      <Content data={data} contentVisible={contentVisible} />
      <BottomBar
        onShare={onShare}
        openMapModal={openMapModal}
        openBsC={openCouponsModal}
        toogle={toogleContent}
        coupon_count={coupon_count}
        liked={liked}
        toogleLike={toogleLike}
      />
      {bs && (
        <BSModal state={bs} setState={setBs} headerTitle="Navigate"></BSModal>
      )}
      {bsC && (
        <BSModal state={bs} setState={setBsC} headerTitle="Coupons">
          <BsCoupons id={id} openModal={openCouponModal} />
        </BSModal>
      )}
    </div>
  );
}

export default SharedPage;
