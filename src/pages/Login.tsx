import logo from "../assets/logo.svg";
import loginImage from "../assets/login.png";

import { Link } from "react-router-dom";
import { useState } from "react";
function Login({ login, onChange, onSubmit }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Function to toggle the visibility of the password
  // This function is called when the "Show" span is clicked
  function toggleShowPassword(e: React.MouseEvent<HTMLSpanElement>) {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  }
  return (
    <section className="login-page">
      <div className="login-image-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="login-image-wrapper">
          <img className="login-image" src={loginImage} alt="login image" />
        </div>
      </div>
      <div className="login-form-container">
        <form className="login-form">
          <div className="login-form-header">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={(event) => onChange(event)}
            required
          />
          <label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={(event) => onChange(event)}
              required
            />
            <span className="showpassword" onClick={toggleShowPassword}>
              Show
            </span>
          </label>
          <Link to="/" className="forgot-password">
            Forgot Password?
          </Link>
          <button onClick={(event) => onSubmit(event)} type="submit">Log in</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
