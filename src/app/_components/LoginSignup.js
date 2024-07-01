"use client"

import React, { useState } from 'react';
import styles from '../auth/page.module.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.titleText}>
          {isLogin ? (<div className={`${styles.title} ${styles.login}`}>
            Login Form
          </div>)
            : (<div className={`${styles.title} ${styles.signup}`}>
              Signup Form
            </div>)}
        </div>
        <div className={styles.formContainer}>
          <div className={styles.slideControls}>
            <input type="radio" name="slide" id="login" className={styles.radioInput} onClick={() => setIsLogin(true)} defaultChecked />
            <input type="radio" name="slide" id="signup" className={styles.radioInput} onClick={() => setIsLogin(false)} />
            <label htmlFor="login" className={`${styles.slide} ${styles.loginLabel}`}>Login</label>
            <label htmlFor="signup" className={`${styles.slide} ${styles.signupLabel}`}>Signup</label>
            <div className={styles.sliderTab} style={isLogin ? {left: 0} : {right: 0}}></div>
          </div>
          <div className={styles.formInner}>
            {isLogin ? (<form action="#" className={`${styles.form} ${styles.loginForm}`}>
              <div className={styles.field}>
                <input type="text" placeholder="Email Address" required className={styles.inputField} />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" required className={styles.inputField} />
              </div>
              <div className={styles.passLink}>
                <a href="#">Forgot password?</a>
              </div>
              <div className={`${styles.field} ${styles.btn}`}>
                <div className={styles.btnLayer}></div>
                <input type="submit" value="Login" className={styles.submitBtn} />
              </div>
              <div className={styles.signupLink}>
                Not a member? <a href="#">Signup now</a>
              </div>
            </form>)
              : (<form action="#" className={`${styles.form} ${styles.signupForm}`}>
                <div className={styles.field}>
                  <input type="text" placeholder="Email Address" required className={styles.inputField} />
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Password" required className={styles.inputField} />
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Confirm password" required className={styles.inputField} />
                </div>
                <div className={`${styles.field} ${styles.btn}`}>
                  <div className={styles.btnLayer}></div>
                  <input type="submit" value="Signup" className={styles.submitBtn} />
                </div>
              </form>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;
