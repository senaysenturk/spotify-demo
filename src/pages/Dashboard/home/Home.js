import React from "react";
import { Outlet } from "react-router-dom";
import Playlists from "../../../components/app/playlists/Playlists";

export const Home = () => {
  return (
    <main>
      <div className="empty-space"></div>
      <Playlists />
    </main>
  );
};

export default Home;
