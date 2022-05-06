import React from "react";
import { Touchable } from "..";
import { useNavigate } from "react-router-dom";

import backBtnDark from "assets/icons/back_black.png";
import backBtnLight from "assets/icons/back.png";

function BackButton({ styleType = "dark" }) {
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Touchable className="btn-back" action={goBack}>
      <img
        src={styleType === "dark" ? backBtnDark : backBtnLight}
        alt="back-button"
      />
    </Touchable>
  );
}

export default BackButton;
