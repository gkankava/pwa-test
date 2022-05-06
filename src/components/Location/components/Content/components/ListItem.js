import React from "react";
import { Touchable } from "ui/components";

function ListItem({ icon, label, action }) {
  return (
    <Touchable className="list-item" action={action}>
      <img src={icon} alt="list-item-icon" />
      <span>{label}</span>
    </Touchable>
  );
}

export default ListItem;
