import React, { useState } from "react";

import Header from "./components/Header";
import GallerySwiper from "./components/GallerySwiper";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";

import { webShare } from "services";
import { BSModal } from "ui/components";
import CouponModalFS from "./components/CouponModal";

import { BSMap, BSKeyword, BSList } from "components/BSComps";
import BsCoupons from "./components/BsCoupons";
import { Helmet } from "react-helmet";
import { getOriginal } from "utils/imgUri";

function SharedPage({ data, refer, liked, toogleLike }) {
  const { title, description, id, coupon_count, gallery, available_locations } =
    data;

  const [contentVisible, setContentVisible] = useState(true);

  const [bs, setBs] = useState(false);
  const toogleBs = (active, id, title, actionType = "") => {
    if (!bs) {
      setBs({ active, id, title, actionType });
    } else if (bs.id !== id) {
      setBs(false);
      setTimeout(() => {
        setBs({ active, id, title, actionType });
      }, 300);
    } else if (bs.id === id && bs.title !== title) {
      setBs({ active, id, title, actionType });
    }
  };

  const BSContent = () => {
    switch (bs.id) {
      case "map":
        return <BSMap locations={available_locations} />;
      case "key":
        return <BSKeyword refer={refer} />;
      case "list":
        return <BSList data={available_locations} actionType={bs.actionType} />;
      case "coupons":
        return <BsCoupons id={id} openModal={openCouponModal} />;
      default:
        return null;
    }
  };

  const toogleContent = () => {
    setContentVisible((prev) => !prev);
  };

  const onShare = () => {
    webShare(title, description, id)
      .then((res) => console.log(res))
      .catch((err) => err);
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
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={getOriginal(data.logo)} />
      </Helmet>
      {couponModal.active && (
        <CouponModalFS data={couponModal.data} closeModal={closeCouponModal} />
      )}
      <Header data={data} toogleBs={toogleBs} />
      <GallerySwiper data={gallery} />
      <Content
        data={data}
        contentVisible={contentVisible}
        toogleBs={toogleBs}
        refer={refer}
      />
      <BottomBar
        onShare={onShare}
        toogleBs={toogleBs}
        toogle={toogleContent}
        coupon_count={coupon_count}
        liked={liked}
        toogleLike={toogleLike}
      />
      {bs && (
        <BSModal state={bs.active} setState={setBs} headerTitle={bs.title}>
          <BSContent />
        </BSModal>
      )}
      {/* {bsC && (
        <BSModal state={bs} setState={setBsC} headerTitle="Coupons">
          <BsCoupons id={id} openModal={openCouponModal} />
        </BSModal>
      )} */}
    </div>
  );
}

export default SharedPage;
