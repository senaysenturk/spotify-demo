import React from "react";
import logo from "./img/Spotify_Logo_black.png";
import "./index.scss";
import "../../../utilities.scss";
import { RiFacebookBoxFill, RiAppleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const apiURL = "http://192.168.1.6:5500";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/auth";
  const scopes = ["user-read-currently-playing", "user-read-playback-state"];
  const spaceDelimeter = "%20";
  const SCOPES_URL_PARAM = scopes.join(spaceDelimeter);

  const getUser = async () => {
    try {
      const response = await axios(`${apiURL}/users/${user.id}`);
      console.log(response);
      if (response.status === 200) {
        if (
          response.data.id === user.id &&
          response.data.password === user.password
        ) {
          console.log("login başarılı");
          window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${response.data.clientId}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
        } else {
          console.log("login başarısız");
        }
      }
    } catch (error) {
      console.log("login başarısız");
    }
  };

  useEffect(() => {
    console.log(window.location.hash);
  });

  return (
    <div className="main">
      <header>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="login-with">
            <p>
              <strong>To continue, log in to Spotify.</strong>
            </p>
            <button className="btn btn-secondary">
              <RiFacebookBoxFill />
              Continue with Facebook
            </button>
            <button className="btn btn-dark">
              <RiAppleFill />
              Continue with Apple
            </button>
            <button className="btn btn-outline">
              <FcGoogle />
              Continue with Google
            </button>
          </div>
          <div className="or-divide">
            <span className="hr"></span>
            <span>
              <strong>OR</strong>
            </span>
            <span className="hr"></span>
          </div>
          <div className="login">
            <form className="login-info">
              <label htmlFor="username">
                <strong>Email address or username</strong>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Email address or username"
                onChange={(e) => {
                  setUser((prev) => ({ ...prev, id: e.target.value }));
                }}
              />
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setUser((prev) => ({ ...prev, password: e.target.value }));
                }}
              />
            </form>
            <div className="forgot-password">
              <a href="https://accounts.spotify.com/en/password-reset">
                Forgot your password?
              </a>
            </div>
            <div className="remember-me">
              <form className="remember-me-checkbox">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </form>
              <div className="login-btn"></div>
              <button className="login-btn btn-primary" onClick={getUser}>
                Login
              </button>
            </div>
            <div className="or-divide">
              <span className="hr"></span>
            </div>
            <div className="sign-up">
              <p>
                <strong>Don't have an account?</strong>
              </p>
              <button className="btn btn-outline">Sign Up for Spotify</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
