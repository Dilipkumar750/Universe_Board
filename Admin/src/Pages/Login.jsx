import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");  

    try {
      const response = await axios.post("http://localhost:8000/auth/login", formData);
      setToken(response.data.token);
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      if (err.response) {
        setError(err.response.data.message || "Something went wrong. Please try again.");
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}  {/ Display error if exists /}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
