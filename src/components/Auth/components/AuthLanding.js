import React from "react";

import logo from "assets/logo/logo-dark.png";
import { Button } from "ui/components";
import { useNavigate } from "react-router-dom";
import { getFacebookToken, getGoogleToken } from "api/lib/social";

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

  const navigateFacebook = () => {
    getFacebookToken().then((response) => {
      window.location.replace(response.data.redirect_url);
    });
  };

  const navigateGoogle = () => {
    getGoogleToken().then((response) => {
      window.location.replace(response.data.redirect_url);
    });
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
          onClick={navigateFacebook}
          type="secondary"
          label="Facebook"
          style={{ marginTop: "10px" }}
        />
        <Button
          onClick={navigateGoogle}
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
