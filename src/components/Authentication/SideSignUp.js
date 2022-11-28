import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import {
  customerFormData,
  customerFormDataValidate,
} from "../schemas/registerCustomer";

const Signups = () => {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));

    authService.registerCustomer(values).then(
      () => navigate({ pathname: "/custdashboard" }),
      (err) => setMsg("Email is in use")
    );
  }

  const customerForm = useFormik({
    initialValues: customerFormData,
    validationSchema: customerFormDataValidate,
    onSubmit,
  });
  return (
    <>
      <div className="">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>

        {msg ? <h4 className="invalid-data my-3">{msg}</h4> : null}

        <form onSubmit={customerForm.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              value={customerForm.values.firstName}
              onChange={customerForm.handleChange}
            />

            <p className="invalid-data">
              {customerForm.errors.firstName && customerForm.touched.firstName
                ? customerForm.errors.firstName
                : null}
            </p>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              value={customerForm.values.lastName}
              onChange={customerForm.handleChange}
            />

            <p className="invalid-data">
              {customerForm.errors.lastName && customerForm.touched.lastName
                ? customerForm.errors.lastName
                : null}
            </p>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              name="email"
              value={customerForm.values.email}
              onChange={customerForm.handleChange}
            />

            <p className="invalid-data">
              {customerForm.errors.email && customerForm.touched.email
                ? customerForm.errors.email
                : null}
            </p>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              name="password"
              value={customerForm.values.password}
              onChange={customerForm.handleChange}
            />

            <p className="invalid-data">
              {customerForm.errors.password && customerForm.touched.password
                ? customerForm.errors.password
                : null}
            </p>
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-input"
              name="confirmPassword"
              value={customerForm.values.confirmPassword}
              onChange={customerForm.handleChange}
            />
            <p className="invalid-data">
              {customerForm.errors.confirmPassword &&
              customerForm.touched.confirmPassword
                ? customerForm.errors.confirmPassword
                : null}
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white hover:rounded-tr-2lg mt-6 hover:bg-red-600 hover:text-white active:bg-sky-400"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signups;
