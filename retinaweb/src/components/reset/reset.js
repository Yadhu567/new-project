import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from "./reset.module.css";

const Reset = () => {
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/reset/", {
        email: resetEmail
      });
      alert(response.data.message);
      setResetEmail('');
      navigate('/');
    } catch (error) {
      setError('Error In Resetting Password');
    }
  };

  return (
    <div className={styles.reset_container}>
      <div className={styles.reset_form_container}>
        <form className={styles.form_container}>
          <h1>Reset Password</h1>
          <input
            className={styles.input}
            placeholder="Email"
            onChange={(e) => setResetEmail(e.target.value)}
            value={resetEmail}
            type="email"
          />
          <input
            type="button"
            value="Reset Password"
            className={styles.green_btn}
            onClick={handleResetPassword}
          />
          {error && <p className={styles.error_msg}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Reset;
