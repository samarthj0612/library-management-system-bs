'use client'

import React, { useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import { auth, db } from '@/app/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState("samarth@gmail.com");
  const [password, setPassword] = useState("123456");

  const { setUser } = useAuth();
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    if(!password || !email) return;

    const getUserFromDatabase = async (uid) => {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(docSnap.data());
        router.push("/profile");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("loggedin user => ", user);

        getUserFromDatabase(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error => ", error);
      });
  }

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.titleText}>
          <div className={`${styles.title} ${styles.login}`}>
            Login Form
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formInner}>
            <form action="#" onSubmit={submitHandler} className={`${styles.form} ${styles.loginForm}`}>
              <div className={styles.field}>
                <input type="text" placeholder="Email Address" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.inputField} />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.inputField} />
              </div>
              <div className={styles.passLink}>
                <a href="#">Forgot password?</a>
              </div>
              <div className={`${styles.field} ${styles.btn}`}>
                <div className={styles.btnLayer}></div>
                <input type="submit" value="Login" className={styles.submitBtn} />
              </div>
              <div className={styles.signupLink}>
                Not a member? <Link href="/auth/register">Register now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
