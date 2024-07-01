"use client"

import React, { useState } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/app/firebase/config';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/authContext';

const Register = () => {
  const [username, setUsername] = useState("samarthj");
  const [email, setEmail] = useState("samarth@gmail.com");
  const [password, setPassword] = useState("123456");
  const [confirmPwd, setConfirmPwd] = useState("123456");

  const { setUser } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();

    if(password != confirmPwd) return;

    const addUserIntoDatabase = async (data) => {
      console.log(data)
      try {
        const docRef = await setDoc(doc(collection(db, "users"), data.authId), data);
        console.log("Document written with ID: ", docRef);

        setUser(data);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("User credentials => ", userCredential);
      console.log("User => ", userCredential.user);

      let data = {
        authId: user.uid,
        username: username,
        email: email,
        password: password
      }
      await addUserIntoDatabase(data);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(error);
      console.log("Error code => ", error.code);
      console.log("Error message => ", error.message);
      // ..
    });

  }

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
      <div className={styles.titleText}>
        <div className={`${styles.title} ${styles.signup}`}>
          Signup Form
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formInner}>
          <form action="#" onSubmit={submitHandler} className={`${styles.form} ${styles.signupForm}`}>
            <div className={styles.field}>
              <input type="text" placeholder="Username" name='username' value={username} onChange={(e) => setUsername(e.target.value)} required className={styles.inputField} />
            </div>
            <div className={styles.field}>
              <input type="text" placeholder="Email Address" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required className={styles.inputField} />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required className={styles.inputField} />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Confirm password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} required className={styles.inputField} />
            </div>
            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Signup" className={styles.submitBtn} />
            </div>
            <div className={styles.signupLink}>
              Already have an account? <Link href="/auth/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register;
