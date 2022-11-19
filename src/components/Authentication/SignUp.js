import { Link } from "react-router-dom";
import "../Authentication/side.css";

import Signups from "./SideSignUp";
// import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div>
      {/* <Header/> */}
      <div className="content">
        <div className="left">
          <div className="left-content ">
            <h3 className="ml-4 font-bold">
              {" "}
              Access local, on-demand workforce 24x7
              <span className="text-blue-700 font-bold">.</span>
              <span className="text-red-800 font-bold">.</span>
              <span className="text-yellow-500 font-bold">.</span>
            </h3>
            <p className="mr-4 text-red-700">
              Already have an account?{" "}
              <Link to="/login" className="hover:text-blue-700">
                Sign in
              </Link>
            </p>{" "}
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <Signups />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
