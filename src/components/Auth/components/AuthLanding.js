import React from "react";

import logo from "assets/logo/logo-dark.png";
import { Button } from "ui/components";
import { useNavigate } from "react-router-dom";

function AuthLanding() {
  let navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goLogin = () => {
    navigate("login");
  };
  const goRegister = () => {
    navigate("register");
  };

  return (
    <div className="auth-landing">
      <img src={logo} alt="app-logo" />
      <div className="content-container">
        <Button label="Login" action={goLogin} />
        <Button
          type="secondary"
          label="Register"
          style={{ marginTop: "10px" }}
          action={goRegister}
        />
        <div className="divider">
          <hr />
          <span>oder login mit</span>
          <hr />
        </div>
        <Button
          type="secondary"
          label="Facebook"
          style={{ marginTop: "10px" }}
        />
        <Button
          type="secondary"
          label="Google+"
          style={{ marginTop: "10px" }}
        />
        <Button type="secondary" label="Apple" style={{ margin: "10px 0" }} />
        <Button label="Cancel" style={{ marginTop: "50px" }} action={goBack} />
      </div>
    </div>
  );
}

export default AuthLanding;
