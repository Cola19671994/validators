import * as yup from "yup";

export const registrationFormSchema = yup.object().shape({
  email: yup.string().required("Enter E-mail").email("E-mail error"),
  password: yup
    .string()
    .required("Enter password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^\S+$/, "The password must contain letters, numbers, and symbols")
    .matches(/[a-zA-Z]+/, "The password must contain letters")
    .matches(/[0-9]+/, "The password must contain numbers")
    .matches(/\W+/, "The password must contain symbols"),
  passcheck: yup
    .string()
    .required("Repeat password")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});
