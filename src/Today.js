import React, { useState } from "react";
import "./Today.css";
import axios from "axios";

export default function Today(props) {
  const [name, setName] = useState({ ready: false });

  function handleResponse(response) {
    setName({
      ready: true,
      cityName: response.data.name,
      date: "30.12.2021",
      day: "Thursday",
      iconURL: "http://openweathermap.org/img/wn/10d@2x.png",
      description: response.data.weather[0].description,
    });
  }
  if (name.ready) {
    return (
      <div className="Today">
        <div className="container mt-4" id="today">
          <div className="row">
            <div className="col-4">
              <h1 id="cityToday">{name.cityName}</h1>
              <h2 id="dayToday">{name.day}</h2>
              <h3 id="dateToday">{name.date}</h3>
            </div>

            <div className="col-4">
              <img
                src={name.iconURL}
                alt={name.description}
                width="150px"
                id="icon"
              />
            </div>

            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "469afd3987955a7eaf265f8d616d9447";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "";
  }
}
