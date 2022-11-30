import * as Yup from "yup";

const CustomerSupportMessage = {
  fullName: "",
  email: "",
  message: "",
};

const CustomerSupportMessageValidate = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email().required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export { CustomerSupportMessageValidate, CustomerSupportMessage };
