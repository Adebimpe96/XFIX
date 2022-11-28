import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import {
  vendorFormData,
  vendorFormDataValidate,
} from "../schemas/registerVendorSchema";

function Artsignup() {
  const navigate = useNavigate();
  function onSubmit(values) {
    console.log("values of form", JSON.stringify(values, null, 2));
    authService.registerVendor(values).then(
      () => navigate({ pathname: "/artlogin" }),
      (err) => console.log("there is an error", err)
    );
  }

  const vendorForm = useFormik({
    initialValues: vendorFormData,
    validationSchema: vendorFormDataValidate,
    onSubmit,
  });

  return (
    <div>
      <div className="block">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>
        <form onSubmit={vendorForm.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              className="form-input"
              name="firstName"
              value={vendorForm.values.firstName}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.firstName && vendorForm.touched.firstName
                ? vendorForm.errors.firstName
                : null}
            </p>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              className="form-input"
              name="lastName"
              value={vendorForm.values.lastName}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.lastName && vendorForm.touched.lastName
                ? vendorForm.errors.lastName
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
              value={vendorForm.values.email}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.email && vendorForm.touched.email
                ? vendorForm.errors.email
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
              value={vendorForm.values.password}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.password && vendorForm.touched.password
                ? vendorForm.errors.password
                : null}
            </p>
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-input"
              name="confirmPassword"
              value={vendorForm.values.confirmPassword}
              onChange={vendorForm.handleChange}
            />
            <p className="invalid-data">
              {vendorForm.errors.confirmPassword &&
              vendorForm.touched.confirmPassword
                ? vendorForm.errors.confirmPassword
                : null}
            </p>
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              id="location"
              className="form-input"
              name="location"
              value={vendorForm.values.location}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.location && vendorForm.touched.location
                ? vendorForm.errors.location
                : null}
            </p>
          </div>

          <div>
            <label>Expertise</label>
            <select
              id="jobtype"
              className="select-form"
              name="expertise"
              value={vendorForm.values.expertise}
              onChange={vendorForm.handleChange}
            >
              <option defaultValue="" className="hidden">
                Choose your specialization
              </option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="painter">Painter</option>
              <option value="Dispatcher">Dispatcher</option>
              <option value="car repairer">Car repairer</option>
            </select>

            <p className="invalid-data">
              {vendorForm.errors.expertise && vendorForm.touched.expertise
                ? vendorForm.errors.expertise
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
    </div>
  );
}

export default Artsignup;
