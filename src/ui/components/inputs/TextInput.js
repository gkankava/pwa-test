import React, { useState } from "react";

function TextInput({
  icoLeft = false,
  icoRight = false,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const setFocusedTrue = () => {
    setFocused(true);
  };
  const setFocusedFalse = () => {
    setFocused(false);
  };

  return (
    <div className="text-input-def" style={{ ...style }}>
      <input
        style={{
          ...inputStyle,
          paddingLeft: icoLeft ? 32 : 10,
          paddingRight: icoRight ? 32 : 10,
        }}
        {...rest}
        onFocus={setFocusedTrue}
        onBlur={setFocusedFalse}
      />
      {icoLeft && (
        <img
          className="input-ico input-ico-left"
          src={icoLeft}
          alt="input-icon-left"
        />
      )}
      {icoRight && (
        <img
          className="input-ico input-ico-right"
          src={icoRight}
          alt="input-icon-right"
        />
      )}
      <div className={`indicator ${focused && "indicator-active"}`} />
    </div>
  );
}

export default TextInput;
