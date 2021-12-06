import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="Today">
      <div className="container" id="today">
        <div className="row">
          <div className="col-4">
            <h1 id="cityToday">Bremen</h1>
            <h2 id="dayToday">Monday</h2>
            <h3 id="dateToday">09.11.2021</h3>
          </div>

          <div className="col-4">
            <img src="" alt="cloudPic" width="150px" id="icon" />
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}
