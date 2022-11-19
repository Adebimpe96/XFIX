import React from "react";

function ArtSidesignup() {
  return (
    <div>
      <div className="form block shadow-sm">
        <h2 className="text-blue-800">Welcome to Xfix!</h2>
        <p className="text-sky-500 mt-2">Create an account with xfix.</p>
        <form action="" method="post" className="">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input type="text" name="fname" id="fname" className="form-input" />
          <label htmlFor="name" className="">
            Email
          </label>
          <input type="email" name="email" id="email" className="form-input" />
          <label htmlFor="phone" className="">
            Phone number
          </label>
          <input type="number" name="" id="" className="form-input" />
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
          />
          <label htmlFor="password" className="">
            Confirm password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
          />
          <label htmlFor="address" className="">
            House address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-input"
          />{" "}
          <label htmlFor="city">Location</label>
          <select id="city" name="city" className="select-form">
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
          <select id="jobtype" name="jobtype" className="select-form">
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

export default ArtSidesignup;
