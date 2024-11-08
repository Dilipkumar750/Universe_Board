import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/register", formData);
      navigation("/")
    } catch (err) {
      console.error(err);
      alert("Error occurred during registration.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          width: "24rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.5rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.5rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #cbd5e0",
                borderRadius: "0.5rem",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "black",
              color: "#ffffff",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "black")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
