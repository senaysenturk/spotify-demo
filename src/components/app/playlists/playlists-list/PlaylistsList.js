import axios from "axios";
import React, { useEffect, useState } from "react";
import PlaylistsCard from "../playlists-card/PlaylistsCard";

export const PlaylistsList = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="list">
        <PlaylistsCard />
        <PlaylistsCard />
        <PlaylistsCard />
        <PlaylistsCard />
        <PlaylistsCard />
      </div>
    </>
  );
};

export default PlaylistsList;
