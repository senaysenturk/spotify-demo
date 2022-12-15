import React from "react";
import "./index.scss";
import logo from "./img/logo.png";
import {
  RiHome5Fill,
  RiHome5Line,
  RiSearchLine,
  RiHeart3Line,
  RiHeart3Fill,
} from "react-icons/ri";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt=""></img>
        </a>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <a className="link" href="/">
              <span className="icon">
                <RiHome5Fill />
              </span>{" "}
              Home
            </a>
          </li>
          <li>
            <a className="link" href="search">
              <span  className="icon">
                <RiSearchLine />
              </span>
              Search
            </a>
          </li>
          <li>
            <a className="link" href="your-library">
              <span  className="icon">
                <VscLibrary />
              </span>
              Your Library
            </a>
          </li>
        </ul>
      </div>
      <div className="playlist">
        <ul>
          <li>
            <a className="link" href="create-playlist">
              <span  className="icon">
                <BsPlusSquareFill />
              </span>
              Create Playlist
            </a>
          </li>
          <li>
            <a className="link" href="liked-songs">
              <span  className="icon">
                <RiHeart3Line />
              </span>
              Liked Songs
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <ul>
          <li>
            <a className="link" href="">
              Cookies
            </a>
          </li>
          <li>
            <a className="link" href="">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
