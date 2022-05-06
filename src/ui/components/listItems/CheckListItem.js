import React from "react";
import { palette } from "ui";
import { Touchable } from "..";

function CheckListItem({ icon, label, active, action, id }) {
  return (
    <Touchable
      className="check-list-item"
      action={() => {
        action(id);
      }}
    >
      <div
        className="ico-container"
        style={{ borderColor: active === id ? palette.green : "white" }}
      >
        <img src={icon} alt="list-item-icon" />
      </div>
      <span style={{ color: active === id ? palette.green : "white" }}>
        {label}
      </span>
    </Touchable>
  );
}

export default CheckListItem;
