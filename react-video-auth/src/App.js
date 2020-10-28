import React, { useState, useEffect } from "react";
import firebase from "./utils/firebaseConfig";

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      console.log(user);
    });
  },[]);

  return <div></div>;
};

export default App;
