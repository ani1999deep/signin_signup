import React, { useEffect, useRef, useState } from "react";
import "./SignInSignUp.css";
import Home from "./Home";

const SignInSignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localsignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localsignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleClick = () => {
    console.log(
      name.current.value,
      email.current.value,
      password.current.value
    );
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account is created Successfully");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (email.current.value && password.current.value) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    }else{
      alert("Please enter the valid credential")
    }
  };

  return (
    <>
      {showHome ? (
        <Home />
      ) : show ? (
        <div className="container">
          <h1>Hello {localName}</h1>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="text" ref={password} />
          </div>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <div className="container">
          <div className="input_space">
            <input placeholder="Name" type="text" ref={name} />
          </div>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Password" type="text" ref={password} />
          </div>
          <button onClick={handleClick}>Sign Up</button>
        </div>
      )}
    </>
  );
};

export default SignInSignUp;
