import React from "react";
import "./index.scss";

import PlaylistsList from "./playlists-list/PlaylistsList";

const Playlists = () => {
  return (
    <>
      <div class="spotify-playlists">
        <PlaylistsList title={"Spotify Playlists"} />
        <PlaylistsList title={"Focus"} />
        <PlaylistsList title={"Sleep"} />
      </div>
    </>
  );
};

export default Playlists;
