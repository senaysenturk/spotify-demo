import React from "react";
import PlaylistsCard from "../../app/playlists/playlists-card/PlaylistsCard";
import {
  AiOutlineHeart,
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlineSound,
} from "react-icons/ai";
import {
  FaPlayCircle,
  FaRandom, //çapraz ok
  FaUndoAlt,
} from "react-icons/fa";

// import { MdPauseCircleFilled } from "react-icons/md";
import { CgToggleSquareOff as CgInpicture } from "react-icons/cg";
// import { HiQueueList } from "react-icons/hi";
import { TbMicrophone2, TbDevices2 } from "react-icons/tb";
import { MdOutlineQueueMusic } from "react-icons/md";
// import { RxSpeakerQuiet } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="footer">
      <div className="music-info">
        <PlaylistsCard />
       
      </div>

      <div className="music-like">
      <a className="link" href="/">
          {" "}
          <AiOutlineHeart />
        </a>

        <a className="link" href="/">
          {" "}
          <CgInpicture />
        </a>
      </div>

      <div className="now-playing">
        <div className="control-panel">
          <a className="link" href="/">
            {" "}
            <FaRandom />
          </a>

          <a className="link" href="/">
            {" "}
            <AiFillStepBackward />{" "}
          </a>

          <a className="link" href="/">
            {" "}
            <FaPlayCircle />
          </a>

          <a className="link" href="/">
            <AiFillStepForward />{" "}
          </a>

          <a className="link" href="/">
            <FaUndoAlt />{" "}
          </a>
        </div>
        <audio controls autoplay muted />
      </div>

      <div className="sound-bar">
        <a className="link" href="/">
          <TbMicrophone2 />{" "}
        </a>

        <a className="link" href="/">
          {" "}
          <MdOutlineQueueMusic />{" "}
        </a>

        <a className="link" href="/">
          <TbDevices2 />
        </a>

        <a className="link" href="/">
          {" "}
          <AiOutlineSound />
        </a>

        <input type="range" id="vol" name="vol" min="0" max="50" />
      </div>
    </div>
  );
};

export default Footer;
