import React from "react";
import "./index.scss";

const Card = ({ title }) => {
  return (
    <div className="search">
      <div className="card">
        <h4 className="title">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
