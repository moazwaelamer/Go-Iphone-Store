import React, { useState } from "react";
import "../style.css";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../script";
import Navbar from "../Component/Navbar";
import Fotter from "../Component/Fotter.jsx";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = signupUser(username, email, password);
    setMessage(result.message);

    if (result.success) {
      setUsername("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="form-container">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>

          <p id="signup-message">{message}</p>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </main>
      <Fotter />
    </div>
  );
};
export default Signup;


