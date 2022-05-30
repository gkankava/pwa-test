import React from "react";
import { Touchable } from "..";

function Button({
  type = "primary",
  label = "",
  action = () => {},
  disabled = false,
  style = {},
  className = "",
  ...rest
}) {
  return (
    <Touchable action={action} className={className}>
      <div
        className={`btn btn-${type}`}
        style={
          disabled ? { backgroundColor: "#adb5bd", ...style } : { ...style }
        }
        {...rest}
      >
        {label}
      </div>
    </Touchable>
  );
}

export default Button;
