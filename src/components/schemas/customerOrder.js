import * as Yup from "yup";

const customerOrderFormData = {
  houseAddress: "",
  phoneNumber: "",
  description: "",
  urgent: "",
  date: "",
};

const customerOrderFormDataValidate = Yup.object().shape({
  houseAddress: Yup.string().required("House Address is required"),
  phoneNumber: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  description: Yup.string().required("Job description is required"),
});

export { customerOrderFormDataValidate, customerOrderFormData };
