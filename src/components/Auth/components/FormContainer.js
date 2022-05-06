import React from "react";

import { BackButton } from "ui/components";
import logo from "assets/logo/logo-dark.png";

function FormContainer(props) {
  return (
    <div className="auth-form-container">
      <div className="header-container">
        <BackButton />
        <img className="h-logo" src={logo} alt="app-logo" />
      </div>
      <div className="form-container">{props.children}</div>
    </div>
  );
}

export default FormContainer;
