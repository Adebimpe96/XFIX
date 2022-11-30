import * as Yup from "yup";

const vendorFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  location: "",
  expertise: "",
};

const vendorFormDataValidate = Yup.object().shape({
  firstName: Yup.string()
    // .matches(/^[a-zA-Z]+$/, "Invalid firstname")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid lastname")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    //   "Password must contain at least one lower case and uppercase"
    // )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  location: Yup.string().required("Location is required"),
  expertise: Yup.string().required("Expertise is required"),
});

export { vendorFormDataValidate, vendorFormData };
