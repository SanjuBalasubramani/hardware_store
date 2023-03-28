import React, { useState } from "react";

const Login = (props) => {
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    // validate email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    // validate password
    if (!pass.trim()) {
      errors.pass = "Password is required";
    } else if (pass.length < 8) {
      errors.pass = "Password should be at least 8 characters ";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      console.log(email);
      // submit form
    }
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  
  return (
    <>
      <div className="box">
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
            />
            {errors.pass && <span className="error">{errors.pass}</span>}

            <button type="submit">Log In</button>
          </form>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here.
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
