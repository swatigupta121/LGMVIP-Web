import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt="Error" />
      <div className="name"><span className="head">Name:</span> {" " + props.first_name + " " + props.last_name}</div>
      <div className="email"><span className="head">E-mail:</span> {" " + props.email}</div>
    </div>
  );
}