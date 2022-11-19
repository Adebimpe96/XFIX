import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Container, Form, Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Container>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton className="border-0 py-5" id="modal">
          <Modal.Title id="contained-modal-title-vcenter">
            <h6>Enter your registered email address to reset your password</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="label">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="border-0 justify-content-center py-3"
          id="modal"
        >
          <Button
            type="submit"
            onClick={props.onHide}
            id="label"
            className="bg-transparent text-dark"
          >
            Reset Password
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
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
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container-md">
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
          <button
            type={"submit"}
            className="signin-button active:bg-sky-300 hover:bg-red-700 text-white bg-blue-600"
            onSubmit={handleSubmit()}
          >
            Sign in
          </button>
          <p className="my-2 cursor-pointer" onClick={() => setModalShow(true)}>
            Forgot Password?
          </p>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </form>
      </div>

      <p className="text-sky-600 cursor-pointer">
        Privacy Policy and Terms of service{" "}
      </p>
    </div>
  );
}

export default Login;
