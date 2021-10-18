import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentUserData, setCurrentUserData] = useState({});
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  async function userData(UID) {
    const userInfo = doc(db, "users", UID);
    const userUID = await getDoc(userInfo);
    if (userUID.exists()) {
      return userUID.data();
    } else {
      throw new Error("Error retrieving user data");
    }
  }

  async function setLoginUser(user) {
    const userInfo = doc(db, "users", user.uid);
    const userUID = await getDoc(userInfo);
    if (userUID.exists()) {
      setCurrentUserData(userUID.data());
    } else {
      throw new Error("Error retrieving user data");
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) await setLoginUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserData,
    login,
    userData,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
