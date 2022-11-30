import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import service from "../../services/services";

const Modal = ({ onClick }) => {
  return (
    <div id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-blue-800 dark:text-white">
              Forgot password?
            </h1>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p className=" text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to
                    you.
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 ml-7 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Reset password
                </button>
                <div
                  className="text-blue-800 cursor-pointer"
                  onClick={() => onClick()}
                >
                  Go back
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function CustLoginpage() {
  document.title = `XFix-Login`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = (data) => {
    authService.login(data).then(
      (res) => {
        service.setToken(res.token);
        alert("Login successfully");
        navigate("/custdashboard");
      },
      (err) => {
        console.log(err);
        setError("Invalid login details");
      }
    );
  };
  const [showForgot, setShowForgot] = useState(false);
  return (
    <>
      {!showForgot ? (
        <div>
          <div className="login-content">
            <h3 className="text-blue-800">Welcome back!</h3>
            <p className="text-sky-500">Sign in to continue</p>
            <p style={{ color: "red", fontSize: "1.2rem" }}>{error}</p>
            <form onSubmit={handleSubmit(submit)}>
              <label> Email</label> &nbsp;
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true, maxLength: 30 })}
              />{" "}
              {errors.email && (
                <p style={{ color: "red" }}>Please check the email</p>
              )}
              <br />
              <label> Password </label> &nbsp;
              <input
                type="password"
                id="password"
                name="password"
                {...register("password", { required: true, maxLength: 30 })}
              />{" "}
              <br />
              <p
                className="my-2 cursor-pointer hover:text-blue-400"
                onClick={() => setShowForgot(true)}
              >
                Forgot Password?
              </p>
              <button
                type={"submit"}
                className="signin-button active:bg-sky-300 hover:bg-red-600 hover:text-white bg-blue-700"
                onSubmit={handleSubmit()}
              >
                Sign in
              </button>
            </form>
          </div>
          <p className="text-sky-500 cursor-pointer">
            Privacy Policy and Terms of service{" "}
          </p>
        </div>
      ) : null}
      <div>
        {showForgot ? <Modal onClick={() => setShowForgot(false)} /> : null}
      </div>
    </>
  );
}
export default CustLoginpage;
