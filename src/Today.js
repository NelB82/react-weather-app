import React from "react";
import "./Today.css";

export default function Today(props) {
  return (
    <div className="Today">
      <div className="container mt-4" id="today">
        <div className="row">
          <div className="col-4">
            <h1 id="cityToday">{props.data.name}</h1>
            <h2 id="dayToday">{props.data.day}</h2>
            <h3 id="dateToday">{props.data.date}</h3>
          </div>

          <div className="col-4">
            <img
              src={props.data.iconURL}
              alt={props.data.description}
              width="150px"
              id="icon"
            />
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
