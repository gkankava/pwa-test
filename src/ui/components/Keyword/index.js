import React from "react";
import { Touchable } from "..";

function Keyword({ label, item, action = () => {} }) {
  const onClick = () => {
    action(item);
  };
  return (
    <Touchable className={`keyword`} action={onClick}>
      <div className="dot" />
      <span>{label}</span>
    </Touchable>
  );
}

export default Keyword;
