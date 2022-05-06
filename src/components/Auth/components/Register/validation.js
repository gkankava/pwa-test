export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "name is required";
  }
  if (!values.surname) {
    errors.surname = "surname is required";
  }
  if (!values.phone_number) {
    errors.phone_number = "phone number is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "invalid email address";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 6) {
    errors.password = "password must be at least 6 characters length";
  }
  if (!values.repassword) {
    errors.repassword = "repeate password";
  } else if (values.repassword !== values.password) {
    errors.repassword = "passwords don't match";
  }
  return errors;
};
