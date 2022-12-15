import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="App-header">
        <div className="App-navbar">
          <div className="prev-next-buttons">
            <button type="button" className="fa fas fa-chevron-left"></button>
            <button type="button" className="fa fas fa-chevron-right"></button>
          </div>

          <nav>
            <ul>
              {/* <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className='divider'>|</li> */}
              <li>
                <a href="auth/signUp">Sign Up</a>
              </li>
            </ul>
            <button type="button" onClick={() => navigate("auth")}>
              Log In
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
