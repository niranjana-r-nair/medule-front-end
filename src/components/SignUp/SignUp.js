import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Here you would normally handle sign up logic
    navigate("/login");
  };

  return (
    <div className="container justify-content-center align-items-center">
      <div className="card p-5 w-50" style={{ backgroundColor: "white" }}>
        <form onSubmit={handleSignUp} className="card-body">
          <h2 className="brand text-center mb-4">Medule</h2>
          <h5 className="card-title text-center">Sign Up</h5>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              type="text"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
          <p className="text-center mt-3">
            <a
              href="/login"
              className="text-secondary"
              style={{ textDecoration: "none" }}
            >
              Already have an account? Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
