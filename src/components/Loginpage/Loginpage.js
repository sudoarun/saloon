import React, { useState } from "react";
import "./Loginpage.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form loginForm">
            <h2 className="title">Sign in</h2>

             <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
              />
            </div> 

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input className="LoginInput" type="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="btn">Sign In</button>

            <p className="social-text loginp"> or Sign in with </p>

            <div className="social-media">
              <a href="#!" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>

              <a href="#!" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form loginForm">
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="text"
                placeholder="Username"
              />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input className="LoginInput" type="email" placeholder="Email" />
            </div>
             
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
              <input className="LoginInput" type="phone" placeholder="Phone number" />
            </div>

            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
              <input
                className="LoginInput"
                type="password"
                placeholder="Password"
              />
            </div>

            <button className="btn">Sign Up</button>

            <p className="social-text loginp">
              Or Sign up with 
            </p>

            <div className="social-media">
              <a href="#!" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
              </a>

              <a href="#!" className="social-icon">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="my-auto mx-auto"
                />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New User ?</h3>

            <p className="loginp">
              Hairfinder, your one stop solution for Grooming 
            </p>

            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>

          <img src={logo} class="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">Already Registered ?</h3>

            <p className="loginp">
            Hairfinder, your one stop solution for Grooming
            </p>

            <button
              onClick={handleSignInClick}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>

          <img src={logo} class="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
