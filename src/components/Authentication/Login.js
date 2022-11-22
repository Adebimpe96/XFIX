import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  document.title = `XFix-Login`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const onSubmit = (data) => {
    if (data.email === "user@gmail.com" && data.password === "1234") {
      localStorage.setItem("authenticated", true);
      navigate("/dashboard");
    } else {
      setError("Invalid login details");
    }
  };
  const [showForgot, setShowForgot] = useState(false);
  return (
    <div className="container-md">
      {!showForgot ? (
        <div>
          <div className="login-content">
            <h3 className="text-blue-800">Welcome back!</h3>
            <p className="text-sky-500">Sign in to continue</p>
            <p style={{ color: "red", fontSize: "1.2rem" }}>{error}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                className="signin-button active:bg-sky-300 hover:bg-red-700 text-white bg-blue-600"
                onSubmit={handleSubmit()}
              >
                Sign in
              </button>
            </form>
          </div>
          <p className="text-sky-600 cursor-pointer">
            Privacy Policy and Terms of service{" "}
          </p>
        </div>
      ) : null}

      <div>
        {showForgot ? <Modal onClick={() => setShowForgot(false)} /> : null}
      </div>
    </div>
  );
}

export default Login;
