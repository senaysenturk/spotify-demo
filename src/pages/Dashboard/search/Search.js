import React from "react";
import Card from "../../../components/app/card/Card";
import "./index.scss";
import Sidebar from "../../../components/shared/sidebar/Sidebar";

export const Search = () => {
  return (
    <>
      <div className="empty-space"></div>
      <div className="spotify-playlists">
        <h2 className="title">Browse All</h2>
        <div className="list">
          <Card title={"Podcast"} style={{ background: "red" }}></Card>
          <Card title={"Made For You"} style={{ background: "red" }}></Card>
          <Card title={"Charts"} style={{ background: "red" }}></Card>
          <Card title={"New Release"} style={{ background: "red" }}></Card>
          <Card title={"New Release"} style={{ background: "red" }}></Card>
        </div>
      </div>
    </>
  );
};

export default Search;
