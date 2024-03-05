import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from "./signin.module.css";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async () => {

    try {
      const response = await axios.post('http://127.0.0.1:8000/signin/', {
        email: email,
        password: password
      });
      localStorage.setItem("token", response.data.data);
      navigate('/userhome');
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.error);
      }
    }
  };

  return (
    <div className={styles.signin_container}>
      <div className={styles.signin_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={(e) => { e.preventDefault(); handleAuth(); }}>
            <h1>Signin to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.input}
            />
            {error && <p className={styles.error_msg}>{error}</p>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
            <p className={`${styles.forgot_password}`}>Forgot password! Reset<NavLink to="/reset"  className={styles.link}>Here
            </NavLink></p>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
