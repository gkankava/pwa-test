import React, { useEffect, useState } from "react";
import CustonHeader from "./components/CustonHeader";

function BSModal({
  state,
  setState,
  shouldRenderHeader = true,
  headerTitle,
  children,
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = () => {
    setMounted(false);
    setTimeout(() => {
      setState(false);
    }, 300);
  };

  return (
    <div className={`bs-modal ${mounted && "bs-modal-active"}`}>
      {shouldRenderHeader && (
        <CustonHeader title={headerTitle} dismiss={dismiss} />
      )}

      <div className="content-container">{children}</div>
    </div>
  );
}

export default BSModal;
