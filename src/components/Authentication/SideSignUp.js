// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Signups = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      fullname,
      email,
      password,
      confirmpassword,
      address,
      phoneno,
      city
    );
    setError(false);
    navigate("/login");
  };

  return (
    <>
      <div className="form block shadow-sm">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>
        <form action="" method="post" className="" onSubmit={handleSubmit}>
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="form-input"
            onChange={(e) => setFullName(e.target.value)}
          />
          <p className="errors">{error}</p>
          <label htmlFor="name" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errors">{error.email?.message}</p>
          <label htmlFor="phone" className="">
            Phone number
          </label>
          <input
            type="number"
            name="number"
            id=""
            className="form-input"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <p className="errors">{error.number?.message}</p>
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errors">{error.password?.message}</p>
          <label htmlFor="confirmpassword" className="">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            className="form-input"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <p className="errors">{error.confirmpassword?.message}</p>
          <label htmlFor="address" className="">
            House address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-input"
            onChange={(e) => setAddress(e.target.value)}
          />{" "}
          <p className="errors">{error.address?.message}</p>
          <label htmlFor="city">Location</label>
          <select
            id="city"
            name="city"
            className="select-form"
            onChange={(e) => setCity(e.target.value)}
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
            <option value="ajah">Ajah</option>
          </select>
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
