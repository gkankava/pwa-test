import React, { useRef, useState } from "react";
import DDItem from "./DDItem";

import { Touchable } from "../..";
import Content from "./Content";
import dotsIco from "assets/icons/dots.png";

function DropDownButton({ children, top = 32 }) {
  const [show, setShow] = useState(false);
  const touchableRef = useRef(null);
  const toogle = () => {
    setShow(!show);
  };
  const close = () => {
    setShow(false);
  };
  return (
    <div className="drop-down-btn">
      <Touchable action={toogle} refC={touchableRef}>
        <img className="ico" src={dotsIco} alt="drop-down-button" />
      </Touchable>
      <Content show={show} close={close} tRef={touchableRef} top={top}>
        {children}
      </Content>
    </div>
  );
}

export default DropDownButton;

export { DDItem };
