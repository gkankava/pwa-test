import React from "react";
import { getThumb } from "utils/imgUri";
import { Touchable } from "..";

function DataGridItem({ item, action }) {
  return (
    <Touchable
      className="data-grid-item"
      action={() => {
        action(item.id);
      }}
    >
      <img src={getThumb(item.logo)} alt="list-item-logo" />
    </Touchable>
  );
}

export default DataGridItem;
