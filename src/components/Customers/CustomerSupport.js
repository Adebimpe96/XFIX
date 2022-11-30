import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { useFormik } from "formik";
import {
  CustomerSupportMessageValidate,
  CustomerSupportMessage,
} from "../schemas/CustomerSupportForm";
function CustomerSupport() {
  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
    alert("Thanks for your feedback.");
  }
  const customerForm = useFormik({
    initialValues: CustomerSupportMessage,
    validationSchema: CustomerSupportMessageValidate,
    onSubmit,
  });

  return (
    <div>
      <div className="support- flex justify-center items-center">
        <h4 className="text-blue-900 align-middle text-2xl font-bold border-b-2">
          Support
        </h4>
      </div>
      <div className="container-lg flex flex-col md:flex-row justify-around py-4">
        <div className="p-3 w-full md:w-1/5">
          <h4 className="text-red-800 font-bold text-2xl">Contact Info</h4>
          <div className="">
            <p className="text-lightBlue my-3">
              With our years of experience in the industry, our primary goal is
              to give you the best experience as you use our platform.
            </p>
            <p className="text-lightBlue font-bold text-lg">
              1612, Oko-awo street,Victoria Island, Lagos, Nigeria
              electro@mailservice.com +2348100112233
            </p>
          </div>
        </div>
        <div className="p-5 w-full md:w-2/5">
          <h4 className="text-darkBlue font-bold text-2xl">
            Send Us a Message
          </h4>
          <form onSubmit={customerForm.handleSubmit}>
            <div>
              <p className="invalid-data">
                {customerForm.errors.fullName && customerForm.touched.fullName
                  ? customerForm.errors.fullName
                  : null}
              </p>
              <label className="block my-2 text-xs">
                <span className="block text-xs font-medium text-slate-700">
                  Full name
                </span>
                <input
                  type="text"
                  name="fullName"
                  className="text-xs w-full rounded-none border-darkBlue"
                  value={customerForm.values.fullName}
                  onChange={customerForm.handleChange}
                />
              </label>
            </div>
            <div>
              <p className="invalid-data">
                {customerForm.errors.email && customerForm.touched.email
                  ? customerForm.errors.email
                  : null}
              </p>
              <label className="block my-2 text-xs">
                <span className="block text-xs font-medium text-slate-700">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  className="text-xs w-full rounded-none border-darkBlue"
                  value={customerForm.values.email}
                  onChange={customerForm.handleChange}
                />
              </label>
            </div>
            <div>
              <p className="invalid-data">
                {customerForm.errors.message && customerForm.touched.message
                  ? customerForm.errors.message
                  : null}
              </p>
              <label className="block my-2 text-xs">
                <span className="block text-xs font-medium text-slate-700">
                  Message
                </span>
                <textarea
                  type="text"
                  name="message"
                  className="text-xs w-full rounded-none border border-darkBlue"
                  value={customerForm.values.message}
                  onChange={customerForm.handleChange}
                  rows={6}
                ></textarea>
              </label>
            </div>
            <div className="flex float-left flex-row justify-start w-1/3">
              <button type="submit" className="bg-lightBlue text-white text-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container-fluid flex flex-row flex-wrap justify-between
             text-darkBlue text-sm font-bold border-b border-gray-600 px-3"
      ></div>
      <div className="flex flex-row justify-center space-x-5 py-4">
        <FaInstagram color="#bc2a8d" fontSize="1.5em" />
        <BsFacebook color="#006AFF" fontSize="1.5em" />
        <BsTwitter color="#1DA1F2" fontSize="1.5em" />
        <FaTiktok fontSize="1.5em" />
      </div>
      <div className="flex flex-row justify-center text-darkBlue text-sm pb-5">
        <p>
          &copy;XFix, Inc.{new Date().getFullYear()} &nbsp;. We love our
          customers!
        </p>
      </div>
    </div>
  );
}

export default CustomerSupport;
