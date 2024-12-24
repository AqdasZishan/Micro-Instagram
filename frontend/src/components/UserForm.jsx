import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../index.css';

function UserForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, mobileNumber, address };
    axios.post("http://localhost:3000/users", user).then(() => {
      alert("User created successfully!");
      navigate("/users");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-header">Create User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Create</button>
    </form>
  );
}

export default UserForm;