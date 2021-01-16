import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signin = () => {
    auth.signInWithPopup(provider)
    .then(result => {
        console.log(result)
    })
    .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://img.icons8.com/doodle/2x/whatsapp.png" alt="" />
        <div className="login__text">Sign in to WhatsApp</div>
        <Button onClick={signin}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
