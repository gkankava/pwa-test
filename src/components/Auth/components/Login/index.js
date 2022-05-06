import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { useStore } from "store";
import { validate } from "./validation";

import { TextInput, Button } from "ui/components";
import FormContainer from "../FormContainer";
import userIco from "assets/icons/profile/user.png";
import passIco from "assets/icons/profile/pass.png";
import { theme } from "ui";

function Login() {
  let navigate = useNavigate();
  const loginUser = useStore((state) => state.loginUser);
  const { isAuthenticated, fetched, error, fetching } = useStore(
    (state) => state.currentUser
  );

  const onSubmit = (values, { setSubmitting }) => {
    loginUser(values);
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (fetched) {
      formik.setSubmitting(false);
      if (isAuthenticated) {
        navigate("/");
      }
    }
    // eslint-disable-next-line
  }, [fetched]);

  return (
    <FormContainer>
      {error && <p className="form-api-error">*Invalid email/password</p>}
      {Object.keys(formik.errors).length > 0 && (
        <div style={{ padding: theme.spacing.m }}>
          {Object.values(formik.errors).map((error, key) => (
            <p key={key} className="form-api-error" style={{ margin: 5 }}>
              *{error}
            </p>
          ))}
        </div>
      )}
      <TextInput
        id="email"
        name="email"
        placeholder="email"
        icoLeft={userIco}
        style={{ marginBottom: "10px" }}
        inputMode="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextInput
        id="password"
        name="password"
        placeholder="password"
        icoLeft={passIco}
        style={{ marginBottom: "10px" }}
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <div style={{ width: "100%", marginTop: "10px" }}>
        <Button
          disabled={fetching}
          label="Login"
          action={formik.handleSubmit}
        />
      </div>
    </FormContainer>
  );
}

export default Login;
