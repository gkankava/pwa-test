import React from "react";

import ListItem from "./ListItem";

import star from "assets/icons/locationList/star.png";
import heart from "assets/icons/locationList/heart.png";
import location from "assets/icons/locationList/location.png";
import phone from "assets/icons/locationList/phone.png";
import mail from "assets/icons/locationList/mail.png";
import web from "assets/icons/locationList/web.png";
import { useNavigate } from "react-router-dom";

function ListSection({ data, setBs, subscribe, subscribed, unSubscribe }) {
  let navigate = useNavigate();
  const goToOffers = () => {
    navigate(`/offers/${data.id}`);
  };
  const openMapBS = () => {
    setBs(true);
  };

  const call = () => {
    window.location.href = "tel:" + data.phone_number;
  };

  const email = () => {
    window.location.href = "mailto:" + data.email;
  };

  const openWebBrowser = () => {
    //  window.location.href = data.web_page;
    window.open(data.web_page, "_blank");
  };
  return (
    <div className="list-section">
      <ListItem icon={star} label="Offers" action={goToOffers} />
      <ListItem
        icon={heart}
        label={subscribed ? "Unsubscribe" : "Subscribe"}
        action={subscribed ? unSubscribe : subscribe}
      />
      <ListItem icon={location} label="Navigation" action={openMapBS} />
      <ListItem icon={phone} label="Call" action={call} />
      <ListItem icon={mail} label="Write" action={email} />
      <ListItem icon={web} label="Website" action={openWebBrowser} />
    </div>
  );
}

export default ListSection;
