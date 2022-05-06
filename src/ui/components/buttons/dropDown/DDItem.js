import React from "react";
import { Touchable } from "ui/components";

function DDItem({ noBorder = false, icon, label = "", action = () => {} }) {
  return (
    <Touchable
      action={action}
      className="drop-down-item"
      style={{ borderTopWidth: noBorder ? 0 : 1 }}
    >
      {icon && <img src={icon} alt="drop-down-btn-ico" />}
      <span>{label}</span>
    </Touchable>
  );
}

export default DDItem;
