import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit_profile } from "./Redux/action";

const ArtProfile = () => {
  const handleEditProfile = (
    firstname,
    lastname,
    email,
    middlename,
    password,
    address,
    bio
  ) => {
    dispatch(
      edit_profile(
        firstname,
        lastname,
        email,
        middlename,
        address,
        password,
        bio
      )
    );
  };
  const { details } = useSelector((state) => state.registration);
  console.log(details);
  const [firstname, setFirstname] = useState(details.firstname);
  const [lastname, setLastname] = useState(details.lastname);
  const [email, setEmail] = useState(details.email);
  const [password, setPassword] = useState(details.password);
  const [bio, setBio] = useState(details.bio);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(firstname, lastname, email, password, bio);
    alert("profile updated successfully");
    console.log(handleEditProfile);
    navigate("/profile");
  };

  return (
    <div className="profile">
      <h1>Profile Details</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          required
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label>Lastname:</label>
        <input
          type="text"
          value={lastname}
          required
          onChange={(e) => setLastname(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Bio:</label>
        <textarea
          type="text"
          rows="7"
          cols="40"
          value={bio}
          required
          onChange={(e) => setBio(e.target.value)}
        />

        <button>Update Profile</button>
      </form>
    </div>
  );
};

export default ArtProfile;
