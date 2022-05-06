import React from "react";
import { Touchable } from "ui/components";

import closeBtn from "assets/icons/close.png";

function CustonHeader({ title, dismiss }) {
  return (
    <div className="bs-modal-header">
      <Touchable action={dismiss}>
        <img src={closeBtn} alt="modal-close-btn" />
      </Touchable>
      <span>{title}</span>
    </div>
  );
}

export default CustonHeader;
