import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  document.title = `XFix-Login`;

  const navigate = useNavigate;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      console.log(values);
      navigate("/dashboard");
    },
  });
  return (
    <div className="container-md">
      <div className="login-content">
        <h3 className="text-blue-800">Welcome back!</h3>
        <p className="text-sky-500">Sign in to continue</p>

        <form onSubmit={formik.handleSubmit}>
          <label> Email</label> &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{" "}
          <p className="text-red-700"> </p>
          <br />
          <label> Password </label> &nbsp;
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />{" "}
          <p className="text-red-700"></p>
          <br />
          <button
            type={"submit"}
            disabled={!(formik.isValid && formik.dirty)}
            className="signin-button active:bg-sky-300 hover:bg-red-700 text-white bg-blue-600"
          >
            Sign in
          </button>
          <p className="my-2 cursor-pointer">Forgot Password?</p>
        </form>
      </div>

      <p className="text-sky-600 cursor-pointer">
        Privacy Policy and Terms of service{" "}
      </p>
    </div>
  );
}

export default Login;
