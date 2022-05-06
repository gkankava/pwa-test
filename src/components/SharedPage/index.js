import React, { useState } from "react";

import Header from "./components/Header";
import GallerySwiper from "./components/GallerySwiper";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import { webShare } from "services";

function SharedPage({ data, refer, liked, toogleLike }) {
  const {
    logo,
    title,
    description,
    id,
    available_locations,
    coupon_count,
    gallery,
  } = data;

  const [contentVisible, setContentVisible] = useState(true);

  const toogleContent = () => {
    setContentVisible((prev) => !prev);
  };

  const onShare = () => {
    webShare(title, description, id)
      .then((res) => console.log(res))
      .catch((err) => err);
  };

  return (
    <div className="shared-page" style={{ height: window.innerHeight }}>
      <Header data={data} />
      <GallerySwiper data={gallery} />
      <Content data={data} contentVisible={contentVisible} />
      <BottomBar
        onShare={onShare}
        // openMapModal={openMapModal}
        // openBsC={openBsC}
        toogle={toogleContent}
        coupon_count={coupon_count}
        liked={liked}
        toogleLike={toogleLike}
      />
    </div>
  );
}

export default SharedPage;
