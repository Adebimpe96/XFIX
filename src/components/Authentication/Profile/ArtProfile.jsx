import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  updateFormData,
  updateFormDataValidate,
} from "../../schemas/ArtProfile";

function ArtProfile() {
  const navigate = useNavigate();
  function onSubmit(values) {
    console.log("values of form", JSON.stringify(values, null, 2));
    alert("Profile updated succes");
    navigate("/dashboard");
  }

  const vendorForm = useFormik({
    initialValues: updateFormData,
    validationSchema: updateFormDataValidate,
    onSubmit,
  });

  return (
    <div className="bg-blue-800">
      <div className="block container ">
        <p className="text-sky-500 mt-2">Update your account.</p>
        <form onSubmit={vendorForm.handleSubmit}>
          <div>
            <label>Middle name</label>
            <input
              type="text"
              className="form-input"
              name="middleName"
              value={vendorForm.values.middleName}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.middleName && vendorForm.touched.middleName
                ? vendorForm.errors.middleName
                : null}
            </p>
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              className="form-input"
              name="address"
              value={vendorForm.values.address}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.address && vendorForm.touched.address
                ? vendorForm.errors.address
                : null}
            </p>
          </div>
          <div>
            <label>Phone number</label>
            <input
              type="phone"
              id="phone"
              className="form-input"
              name="phone"
              value={vendorForm.values.phone}
              onChange={vendorForm.handleChange}
            />

            <p className="invalid-data">
              {vendorForm.errors.phone && vendorForm.touched.phone
                ? vendorForm.errors.phone
                : null}
            </p>
          </div>
          <div>
            <label>Business Name</label>
            <input
              type="text"
              id="businessName"
              className="form-input"
              name="businessName"
              value={vendorForm.values.businessName}
              onChange={vendorForm.handleChange}
            />
            <p className="invalid-data">
              {vendorForm.errors.businessName && vendorForm.touched.businessName
                ? vendorForm.errors.businessName
                : null}
            </p>
          </div>
          <div>
            <label>Business Description</label>
            <textarea
              id=""
              cols="10"
              rows="6"
              className="text-xs w-4/5 rounded-none border border-darkBlue"
              name="businessDesc"
              value={vendorForm.values.businessDesc}
              onChange={vendorForm.handleChange}
            ></textarea>
          </div>

          <div></div>

          <button
            type="submit"
            className="bg-blue-700 text-white hover:rounded-tr-2lg mt-6 hover:bg-red-600 hover:text-white active:bg-sky-400"
          >
            Update profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default ArtProfile;
