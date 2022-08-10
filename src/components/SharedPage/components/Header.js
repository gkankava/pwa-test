import React from "react";
import { BackButton, DDItem, DropDownButton } from "ui/components";
import { getThumb } from "utils/imgUri";

import home from "assets/icons/home.png";
import phone from "assets/icons/phone.png";
import mail from "assets/icons/mail.png";
import web from "assets/icons/web.png";

function Header({ data, toogleBs }) {
  const { logo, title, description } = data.available_locations[0];
  const toLocation = () => {
    toogleBs(true, "list", "To Location", "navigate");
  };
  const call = () => {
    toogleBs(true, "list", "call", "call");
  };
  const mailTo = () => {
    toogleBs(true, "list", "E-mail", "mailTo");
  };
  const openBrowser = () => {
    toogleBs(true, "list", "website", "openBrowser");
  };
  return (
    <div className="header">
      <BackButton styleType="light" />
      <img src={getThumb(logo)} alt="logo" className="logo" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="sub-title">{description}</div>
      </div>
      <DropDownButton top={75}>
        <DDItem
          noBorder
          icon={home}
          label="To the location"
          action={toLocation}
        />
        <DDItem icon={phone} label="Anrufen" action={call} />
        <DDItem icon={mail} label="Nachricht" action={mailTo} />
        <DDItem icon={web} label="Website" action={openBrowser} />
      </DropDownButton>
    </div>
  );
}

export default Header;
