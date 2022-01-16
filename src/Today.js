import React from "react";
import "./Today.css";

export default function Today(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.date.getDay()];
  let hours = [props.data.date.getHours()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Today">
      <div className="container mt-4" id="today">
        <div className="row">
          <div className="col-4">
            <h1 id="cityToday">{props.data.name}</h1>
            <h2 id="dayToday">{day}</h2>
            <h3 id="timeToday">
              {hours}:{minutes}
            </h3>
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
