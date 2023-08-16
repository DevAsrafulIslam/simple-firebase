import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  // github
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // google signOut
  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      {user ? (
        <button className="my-4" onClick={signOutGoogle}>
          Sign out
        </button>
      ) : (
        <div className="flex gap-2 items-center justify-center">
          <button className="my-4" onClick={signInWithGoogle}>
            Google Login
          </button>
          <button onClick={githubSignIn}>Github Login</button>
        </div>
      )}
      {user && (
        <div className="border border-[goldenrod] py-4">
          <h3>User: {user.displayName}</h3>
          <h5>Email: {user.email}</h5>
          <h5>Provider : {user.providerId}</h5>
        </div>
      )}
    </div>
  );
};

export default Login;
