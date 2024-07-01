"use client"

// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../app/firebase/config'; // Assuming you have firebase initialized here

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  signin: () => {},
  signout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
