import Axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col-5">
            <div className="WeatherForecast-day">Sat</div>
            <img
              src={props.data.iconURL}
              alt={props.data.description}
              width="80px"
              id="icon"
            />
            <br />
            <span className="WeatherForecast-temperatures-max">
              {Math.round(forecast[0].temp.max)}°
            </span>
            |
            <span className="WeatherForecast-temperatures-min">
              {Math.round(forecast[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "469afd3987955a7eaf265f8d616d9447";
    let long = props.data.coords.lon;
    let lat = props.data.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}&units=metric`;

    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
