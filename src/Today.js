import React, { useState } from "react";
import "./Today.css";
import axios from "axios";

export default function Today() {
  const [ready, setReady] = useState(false);
  const [name, setName] = useState(null);

  function handleResponse(response) {
    setName(response.data.name);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Today">
        <div className="container" id="today">
          <div className="row">
            <div className="col-4">
              <h1 id="cityToday">{name}</h1>
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
  } else {
    const apiKey = "469afd3987955a7eaf265f8d616d9447";
    let city = "Bremen";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "";
  }
}
