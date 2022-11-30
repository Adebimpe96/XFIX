import * as Yup from "yup";

const updateFormData = {
  middleName: "",
  address: "",
  phone: "",
  businessName: "",
  businessDesc: "",
};

const updateFormDataValidate = Yup.object().shape({
  middleName: Yup.string().required("middle name is required"),
  adrress: Yup.string().required("Business address is required"),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,8}$/,
      "Enter a valid phone number"
    )
    .required("Phone number is required"),
  businessDesc: Yup.string().required("Job description is required"),
  businessName: Yup.string().required("Business name is required"),
});

export { updateFormDataValidate, updateFormData };
