import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { Button } from "..";

function PrivateModal() {
  let navigate = useNavigate();
  const isVisible = useStore((state) => state.privateModal.visible);
  const setPrivateModalVisible = useStore(
    (state) => state.setPrivateModalVisible
  );

  const goTo = () => {
    dismiss();
    navigate("auth");
  };

  const dismiss = () => {
    setPrivateModalVisible({ visible: false });
  };

  if (!isVisible) return null;

  return (
    <div className="private-modal" onClick={dismiss}>
      <div
        className="content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p> You don't have permission! You have to be authenticated</p>
        <Button
          label="Login"
          style={{ marginBottom: 10, width: "100%" }}
          action={goTo}
        />
        <Button type="secondary" label="Close" action={dismiss} />
      </div>
    </div>
  );
}

export default PrivateModal;
