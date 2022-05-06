import React from "react";

function Container({ children, mounted }) {
  return (
    <div className={`auth-container`}>
      <div className={`inner-container mounted-${mounted.toString()}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
