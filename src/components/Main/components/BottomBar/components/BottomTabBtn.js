import React from "react";

function BottomTabBtn({ action = () => {}, id, children }) {
  return (
    <button className="bt-btn" onClick={action}>
      {children}
    </button>
  );
}

export default BottomTabBtn;
