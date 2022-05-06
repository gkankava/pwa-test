import React from "react";
import { Touchable } from "..";

import closeBtn from "assets/icons/close.png";

function CloseButton({ style = "light", action = () => {} }) {
  return (
    <Touchable className="btn-close" action={action}>
      <img src={style === "light" ? closeBtn : null} alt="close-button" />
    </Touchable>
  );
}

export default CloseButton;
