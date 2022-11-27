import React from "react";
import { useForm } from "react-hook-form";

function Artsignup() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      expertise: "",
    },
  });
  return (
    <div>
      <div className="block">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>
        <form
          action=""
          method="post"
          className=""
          onSubmit={handleSubmit(console.log)}
        >
          <label htmlFor="name" className="">
            First Name
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="form-input"
            {...register("firstName", { required: true })}
          />
          <label htmlFor="name" className="">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
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
          <label htmlFor="password" className="">
            Confirm password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            {...register("password", { required: true })}
          />{" "}
          <label htmlFor="city">Location</label>
          <select
            id="city"
            name="city"
            className="select-form"
            {...register("location")}
          >
            <option value={""} className="hidden">
              Choose your area
            </option>
            <option value="ikeja">Ikeja</option>
            <option value="Yaba">Yaba</option>
            <option value="victoria island">Victoria Island</option>
            <option value="oshodi">Oshodi</option>
            <option value="mushin">Mushin</option>
            <option value="ikorodu">Ikorodu</option>
            <option value="ogba">Ogba</option>
            <option value="surulere">Surulere</option>
            <option value="agege">Agege</option>
            <option value="ikotun">Ikotun</option>
            <option value="festac">Festac</option>
            <option value="iyanaipaja">Iyana Ipaja</option>
            <option value="lekki/ikoyi">Lekki/Ikoyi</option>
            <option value="ajah">Ajah</option> <br />
          </select>
          <label htmlFor="jobtype">Expertise</label>
          <select
            id="jobtype"
            name="jobtype"
            className="select-form"
            {...register("expertise")}
          >
            <option value={""} className="hidden">
              Choose your specialization
            </option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="carpenter">Carpenter</option>
            <option value="painter">Painter</option>
            <option value="Dispatcher">Dispatcher</option>
            <option value="car repairer">Car repairer</option>
          </select>
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
