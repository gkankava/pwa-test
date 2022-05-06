import React from "react";

import { CloseButton } from "ui/components";

function SceneContainer({ children, onClose }) {
  return (
    <div className="scene-container" style={{ maxHeight: window.innerHeight }}>
      <CloseButton action={onClose} />
      {children}
    </div>
  );
}

export default SceneContainer;
