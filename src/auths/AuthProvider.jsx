import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const myAxios = useAxios();

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      setLoading(false);
      if (currentUser) {
        try {
          const email = auth.currentUser.email;

          // Send a request to verify the access token
          const res = await myAxios.post("/auth/access-token", {
            email: email,
          });
        } catch (error) {
          console.log(error.message);
        }
      }
    });
    return () => {
      return subscribe(); //clean up function
    };
  }, [myAxios]);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
