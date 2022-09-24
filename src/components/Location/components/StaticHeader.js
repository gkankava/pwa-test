import React from "react";
import { BackButton, Touchable, DropDownButton, DDItem } from "ui/components";

import chatIcon from "assets/icons/chat/createChatIcon@3x.png";
import likeIco from "assets/icons/heart.png";
import likeIcoActive from "assets/icons/heart_active.png";
import phone from "assets/icons/phone.png";
import mail from "assets/icons/mail.png";
import web from "assets/icons/web.png";
import location from "assets/filters/location.png";

function StaticHeader({
  toogleBs,
  data,
  subscribe,
  unSubscribe,
  subscribed,
  isAuthenticated,
}) {
  const openMapBS = () => {
    toogleBs(true, "map", "Navigate");
  };

  const call = () => {
    window.location.href = "tel:" + data.phone_number;
  };

  const email = () => {
    window.location.href = "mailto:" + data.email;
  };

  const openWebBrowser = () => {
    window.open(data.web_page, "_blank");
  };

  const handleChat = () => {};

  return (
    <div className="static-header">
      <div style={{ marginRight: "auto" }}>
        <BackButton styleType="light" />
      </div>
      {isAuthenticated && (
        <Touchable className="follow-btn chat-ico" action={handleChat}>
          <img className="chat-icon" src={chatIcon} alt="new-chat" />
        </Touchable>
      )}
      <Touchable
        className="follow-btn"
        action={subscribed ? unSubscribe : subscribe}
      >
        <img
          src={subscribed ? likeIcoActive : likeIco}
          alt="subscribition-ico"
        />
      </Touchable>
      <DropDownButton top={75}>
        <DDItem
          noBorder
          icon={location}
          label="Navigation"
          action={openMapBS}
        />
        <DDItem icon={phone} label="Anrufen" action={call} />
        <DDItem icon={mail} label="Nachricht" action={email} />
        <DDItem icon={web} label="Website" action={openWebBrowser} />
      </DropDownButton>
    </div>
  );
}

export default StaticHeader;
