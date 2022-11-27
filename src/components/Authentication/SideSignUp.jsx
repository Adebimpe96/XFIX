// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useForm } from "react-hook-form";
const Signups = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <div className="">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>
        <form
          action=""
          method="post"
          className=""
          onSubmit={handleSubmit(console.log)}
        >
          <label htmlFor="fname" className="">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="form-input"
            {...register("firstName", { required: true })}
          />

          <label htmlFor="lname" className="">
            Last Name
          </label>
          <input
            type="text"
            name="name"
            id="lname"
            className="form-input"
            {...register("lastName", { required: true })}
          />
          <label htmlFor="name" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            {...register("email", { required: true })}
          />

          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            {...register("password", { required: true })}
          />

          <label htmlFor="confirmpassword" className="">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className="form-input"
            {...register("password", { required: true })}
          />

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
