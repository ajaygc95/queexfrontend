export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }
  if (!values.first_name.trim()) {
    errors.first_name = "First Name is required";
  }
  if (!values.last_name.trim()) {
    errors.last_name = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2.length < 6) {
    errors.password2 = "Password needs to be 6 characters or more";
  } else if (values.password != values.password2) {
    errors.password2 = "Passwords don't match.";
  }

  // if (
  //   typeof values.password !== "undefined" &&
  //   typeof values.password2 !== "undefined"
  // ) {
  //   if (values.password != values.password2) {
  //     values.password2 = "Passwords don't match.";
  //   }
  // }

  return errors;
}
