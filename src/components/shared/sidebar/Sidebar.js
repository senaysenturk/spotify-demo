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
import { Link, Router } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link className="link" to="/">
          <img src={logo} alt=""></img>
        </Link>
      </div>
      <div className="main-menu">
        <ul>
          <li>
            <Link className="link" to="/">
              <span className="icon">
                <RiHome5Fill />
              </span>{" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="search">
              <span className="icon">
                <RiSearchLine />
              </span>
              Search
            </Link>
          </li>
          <li>
            <Link className="link" to="your-library">
              <span className="icon">
                <VscLibrary />
              </span>
              Your Library
            </Link>
          </li>
        </ul>
      </div>
      <div className="playlist">
        <ul>
          <li>
            <Link className="link" to="create-playlist">
              <span className="icon">
                <BsPlusSquareFill />
              </span>
              Create Playlist
            </Link>
          </li>
          <li>
            <Link className="link" to="liked-songs">
              <span className="icon">
                <RiHeart3Line />
              </span>
              Liked Songs
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-footer">
        <ul>
          <li>
            <Link className="link" to="">
              Cookies
            </Link>
          </li>
          <li>
            <Link className="link" to="">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
