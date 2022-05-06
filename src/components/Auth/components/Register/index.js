import React, { useEffect } from "react";
import FormContainer from "../FormContainer";

import { useFormik } from "formik";
import { validate } from "./validation";

import { useStore } from "store";

import { getTimeZoneOffset } from "utils/deviceTimeZoneOffset";
import { useNavigate } from "react-router-dom";
import { theme } from "ui";

import { TextInput, Button } from "ui/components";

import userIco from "assets/icons/profile/user.png";
import mailIco from "assets/icons/profile/mail.png";
import phoneIco from "assets/icons/profile/phone.png";
import passIco from "assets/icons/profile/pass.png";

function Register() {
  const navigate = useNavigate();
  const tz = getTimeZoneOffset();

  const onSubmit = (values, { setSubmitting }) => {
    registerUser(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repassword: "",
      phone_number: "",
      timezone: tz,
    },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const registerUser = useStore((state) => state.registerUser);
  const { isAuthenticated, fetching, fetched, error } = useStore(
    (state) => state.currentUser
  );

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
        id="name"
        name="name"
        placeholder="name"
        icoLeft={userIco}
        style={{ marginBottom: "10px" }}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextInput
        id="surname"
        name="surname"
        placeholder="surname"
        icoLeft={userIco}
        style={{ marginBottom: "10px" }}
        value={formik.values.surname}
        onChange={formik.handleChange}
      />
      <TextInput
        id="email"
        name="email"
        placeholder="email"
        icoLeft={mailIco}
        style={{ marginBottom: "10px" }}
        inputMode="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextInput
        id="phone_number"
        name="phone_number"
        placeholder="phone_number"
        icoLeft={phoneIco}
        style={{ marginBottom: "10px" }}
        inputMode="tel"
        type="tel"
        value={formik.values.phone_number}
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
      <TextInput
        id="repassword"
        name="repassword"
        placeholder="repeat password"
        icoLeft={passIco}
        style={{ marginBottom: "10px" }}
        type="password"
        value={formik.values.repassword}
        onChange={formik.handleChange}
      />
      <div style={{ width: "100%", marginTop: "10px" }}>
        <Button
          disabled={fetching}
          label="Sign up"
          action={formik.handleSubmit}
        />
      </div>
    </FormContainer>
  );
}

export default Register;
