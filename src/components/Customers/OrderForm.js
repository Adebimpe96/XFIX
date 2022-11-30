import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  customerOrderFormData,
  customerOrderFormDataValidate,
} from "../schemas/customerOrder";

const OrderForm = () => {
  const navigate = useNavigate();
  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    navigate("/orderdetails");
  }

  const customerForm = useFormik({
    initialValues: customerOrderFormData,
    validationSchema: customerOrderFormDataValidate,
    onSubmit,
  });
  return (
    <div className="bg-formBg bg-no-repeat bg-cover">
      <div className="text-white bg-darkBlue py-3 align-middle">
        <div className="flex flex-row mx-5 text-white">
          <h4 className="font-medium text-lg">New Order</h4>
        </div>
      </div>
      <div className="justify-center items-center rounded-sm backdrop-blur-sm bg-white/60">
        <h5 className="text-darkBlue font-semibold text-2xl py-3">
          Please fill in your details correctly
        </h5>

        <form onSubmit={customerForm.handleSubmit} className="container">
          <div>
            <p className="invalid-data">
              {customerForm.errors.houseAddress &&
              customerForm.touched.houseAddress
                ? customerForm.errors.houseAddress
                : null}
            </p>
            <label class="block my-2 text-sm">
              <span class="block text-sm font-medium text-darkBlue">
                Home address
              </span>
              <input
                type="text"
                className="text-sm "
                name="houseAddress"
                placeholder="Block 1, Ikorodu"
                value={customerForm.values.houseAddress}
                onChange={customerForm.handleChange}
              />
            </label>
          </div>
          <div>
            <p className="invalid-data">
              {customerForm.errors.phoneNumber &&
              customerForm.touched.phoneNumber
                ? customerForm.errors.phoneNumber
                : null}
            </p>
            <label class="block my-2 text-sm">
              <span class="block text-sm font-medium text-darkBlue">
                Phone number
              </span>
              <input
                type="tel"
                className="text-sm "
                name="phoneNumber"
                placeholder="+234800000000"
                value={customerForm.values.phoneNumber}
                onChange={customerForm.handleChange}
              />
            </label>
          </div>

          <div>
            <p className="invalid-data">
              {customerForm.errors.description &&
              customerForm.touched.description
                ? customerForm.errors.description
                : null}
            </p>
            <label class="block my-2 text-sm">
              <span class="block text-sm font-medium text-darkBlue">
                Description of job
              </span>
              <textarea
                rows={6}
                className="outline-none border w-4/5 rounded-md p-1"
                name="description"
                placeholder="Enter your details"
                value={customerForm.values.description}
                onChange={customerForm.handleChange}
              ></textarea>
            </label>
          </div>

          <div>
            <label className="inline-flex space-x-2">
              <input
                type="checkbox"
                className="text-lg "
                name="urgent"
                value={customerForm.values.urgent}
                onChange={customerForm.handleChange}
              />

              <span class="text-sm font-medium text-darkBlue my-auto">
                Urgent
              </span>
            </label>
          </div>
          <div>
            <label class="block my-2 text-sm">
              <span class="block text-sm font-medium text-darkBlue">
                Book for a later date
              </span>
              <input
                type="date"
                className="text-sm"
                name="date"
                value={customerForm.values.date}
                onChange={customerForm.handleChange}
              />
            </label>
          </div>
          <div className="flex flex-row space- py-3 px-4 mx-4">
            <Link
              to="/location"
              className="flex flex-row text-decoration-none w-1/3"
            >
              <button className="bg-darkBlue text-sm">Back</button>
            </Link>

            <button
              type="submit"
              className="flex flex-row bg-darkBlue text-sm w-1/4 justify-center items-center"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
