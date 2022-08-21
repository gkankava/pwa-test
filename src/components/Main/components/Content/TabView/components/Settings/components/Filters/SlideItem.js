import React from "react";
import { Touchable } from "ui/components";

function SlideItem({ data }) {
  const { img, title } = data;
  return (
    <>
      <Touchable className="filter-slide-item">
        <img src={img} alt="filter-ico" />
        <span>{title}</span>
      </Touchable>
    </>
  );
}

export default SlideItem;
