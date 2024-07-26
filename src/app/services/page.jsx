import React from 'react';
import styles from '@/styles/userlogin.module.css';

const Services = () => {
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
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="mobile">Mobile No.</label>
                  <input type="text" id="mobile" name="mobile" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" className={styles.input} />
                </div>
                <div className={styles.rememberForgot}>
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className={styles.forgot}>Forgot Password</a>
                </div>
                <button type="submit" className={styles.loginBtn}>Login</button>
              </form>
              <div className={styles.newUser}>
                <p>New User</p>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Services;
