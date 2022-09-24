import React from "react";
import { BackButton, DDItem, DropDownButton } from "ui/components";
import { getThumb } from "utils/imgUri";

function Header({}) {
  return (
    <div className="header">
      <BackButton styleType="light" />
      <div className="title">Chats</div>
      <div style={{ width: 30 }} />
    </div>
  );
}

export default Header;
