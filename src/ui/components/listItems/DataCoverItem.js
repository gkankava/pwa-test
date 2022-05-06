import React from "react";
import { getOriginal } from "utils/imgUri";
import { Touchable } from "..";

function DataCoverItem({ item, action }) {
  return (
    <Touchable
      className="data-cover-item"
      action={() => {
        action(item.id);
      }}
    >
      <img src={getOriginal(item.logo)} alt="item-logo" />
      <div className="inner-container">
        <span className="title">{item.title}</span>
        <span className="description">{item.description}</span>
        <div className="divider" />
      </div>
    </Touchable>
  );
}

export default DataCoverItem;
