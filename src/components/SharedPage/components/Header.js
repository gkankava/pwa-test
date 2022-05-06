import React from "react";
import { BackButton, DDItem, DropDownButton } from "ui/components";
import { getThumb } from "utils/imgUri";

import home from "assets/icons/home.png";
import phone from "assets/icons/phone.png";
import mail from "assets/icons/mail.png";
import web from "assets/icons/web.png";

function Header({ data }) {
  const { logo, title, description } = data;
  return (
    <div className="header">
      <BackButton styleType="light" />
      <img src={getThumb(logo)} alt="logo" className="logo" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="sub-title">{description}</div>
      </div>
      <DropDownButton top={75}>
        <DDItem noBorder icon={home} label="To the location" />
        <DDItem icon={phone} label="Anrufen" />
        <DDItem icon={mail} label="Nachricht" />
        <DDItem icon={web} label="Website" />
      </DropDownButton>
    </div>
  );
}

export default Header;
