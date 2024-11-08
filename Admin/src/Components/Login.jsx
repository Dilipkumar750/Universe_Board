import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/auth/login", formData);
      navigation("/home")
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
          Login
        </h1>
        
        {error && (
          <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", color: "#4a5568" }}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
              value={formData.password}
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
            Login
          </button>
        </form>
        
        <div
          style={{
            justifyContent: "space-between",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#3b82f6",
              cursor: "pointer",
              textDecoration: "underline",
              padding: "0",
            }}
            onClick={() => alert("Forgot Password clicked")}
          >
            Forgot Password?
          </button>
          <Link to="/register">
            <button
              style={{
                width: "100%",
                backgroundColor: "black",
                color: "#ffffff",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
                marginTop: "20px",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
