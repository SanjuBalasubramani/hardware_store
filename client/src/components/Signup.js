import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../assets/Account.css";
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!validatePassword(e.target.value)) {
      setPasswordError(
        "  *Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

    try {
      await axios
        .post("http://localhost:3000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("user already exist");
          }
          else{
            history("/", { state: { id: email } });
          }
        });
    } catch (e) {
      alert("Something went wrong");
      console.log(e);
    }
  };

  return (
    <div className="login">
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          name=""
          id=""
        />
        {emailError && <span className="error">{emailError}</span>}
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          name=""
          id=""
        />
        {passwordError && <span className="error">{passwordError}</span>}
        <input className="submit " type="submit" value="Sign up" />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Login;
