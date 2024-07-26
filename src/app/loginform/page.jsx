"use client";

import React, { useState } from 'react';
import styles from '@/styles/loginform.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import forgot from "../forgotPassword/page";

const LoginForm = () => {
  const [email, setEmail] = useState('samarth@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log('email:', email, 'password:', password)
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
  
      console.log("authrss => ",result.data.email)

      if (response.ok) {
        router.push(`/profile/${result.data.UID}/user`);
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.insideBlock}>
            <div className={styles.left}>
              <img className={styles.img} src="/img/libraries/img29.jpg" alt="Library" />
            </div>
            <div className={styles.right}>
              <h2>Welcome to Dream Library</h2>
              <p>LogIn to your account</p>
              {error && <p className={styles.error}>{error}</p>}
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.rememberForgot}>
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <Link href="/forgotPassword" className={styles.forgot}>Forgot Password</Link>
                </div>
                <button type="submit" className={styles.loginBtn}>Login</button>
              </form>
              <div className={styles.newUser}>
                <p>New User</p>
                <Link href={'/registration'}>
                  <button className={styles.signUpBtn}>Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
