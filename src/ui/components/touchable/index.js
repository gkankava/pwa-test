import React from "react";

function Touchable({ children, action, className, refC, ...rest }) {
  return (
    <div
      ref={refC}
      className={`touchable-opacity-comp ${className}`}
      onClick={action}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Touchable;
