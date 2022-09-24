import React, { useEffect } from "react";

import logo from "assets/logo/logo-dark.png";
import { Button } from "ui/components";
import { useNavigate } from "react-router-dom";
import { getFacebookToken, getGoogleToken } from "api/lib/social";
import useScript from "utils/useScript";
import { generateQueryString } from "utils/generateQueryString";
import facebookIco from "../../../assets/icons/facebook.svg";
import googleIco from "../../../assets/icons/google.svg";

function AuthLanding() {
  const authOptions = {
    clientId: "de.yezzgo.app-service",
    scope: "email name",
    redirectURI: "https://demo-app.yezzgo.de/v1/mobile/login/apple/callback",
    state: "state",
    nonce: "nonce",
  };
  const [loaded] = useScript(
    `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js`
  );
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const onClick = async (e = null) => {
    if (e) {
      e.preventDefault();
    }

    window.location.href = `https://appleid.apple.com/auth/authorize?${generateQueryString(
      {
        response_type: "code",
        response_mode: "query",
        client_id: authOptions.clientId,
        redirect_uri: authOptions.redirectURI,
        state: authOptions.state,
        nonce: authOptions.nonce,
        scope: "",
      }
    )}`;
  };

  const load = async () => {
    if (loaded) {
      window.AppleID.auth.init(authOptions);
    }
  };
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
      <img className="authLogo" src={logo} alt="app-logo" />
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
        <button
          onClick={navigateFacebook}
          type="secondary"
          style={{
            borderRadius: "0.5em",
            marginTop: "10px",
            backgroundColor: "#1B77F2",
            color: "#FFF",
            height: "33px",
            border: "none",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            alt="facebook auth"
            src={facebookIco}
            style={{ marginRight: "0.2em", width: "15px", height: "15px" }}
          />
          Log in with Facebook
        </button>
        <button
          onClick={navigateGoogle}
          type="secondary"
          style={{
            borderRadius: "0.5em",
            marginTop: "10px",
            backgroundColor: "#4286F5",
            color: "#FFF",
            height: "33px",
            border: "none",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            alt="google auth"
            src={googleIco}
            style={{ marginRight: "0.4em", width: "15px", height: "15px" }}
          />
          Sign in with Google
        </button>

        <div
          style={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <div
            onClick={onClick}
            id="appleid-signin"
            className="signin-button"
            data-color="black"
            data-border="true"
            data-type="sign in"
          ></div>
        </div>
        <Button label="Cancel" style={{ marginTop: "50px" }} action={goBack} />
      </div>
    </div>
  );
}

export default AuthLanding;
