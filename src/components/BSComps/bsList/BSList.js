import React from "react";
import { useNavigate } from "react-router-dom";

import BSScrollView from "../components/BSScrollView";
import { ListView } from "ui/components";

function BSList({ data, actionType }) {
  let navigate = useNavigate();

  const onNavigate = (item) => {
    navigate(`/location/${item.id}`);
  };
  const onCall = (item) => {
    window.location.href = "tel:" + item.phone_number;
  };
  const onMailTo = (item) => {
    window.location.href = "mailto:" + item.email;
  };
  const onOpenBrowser = (item) => {
    window.open(item.web_page, "_blank");
  };

  const action = (item) => {
    switch (actionType) {
      case "navigate":
        onNavigate(item);
        break;
      case "call":
        onCall(item);
        break;
      case "mailTo":
        onMailTo(item);
        break;
      case "openBrowser":
        onOpenBrowser(item);
        break;
      default:
        break;
    }
  };
  return (
    <BSScrollView>
      <ListView data={data} action={action} bs />
    </BSScrollView>
  );
}

export default BSList;
