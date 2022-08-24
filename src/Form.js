import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import TodayList from "./TodayList";
import Today from "./Today";
import WeatherForecast from "./WeatherForecast";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconURL: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      coords: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "291066fffabaef537a08ff10a041ce18";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="form">
        <form id="searchForm" className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Search for your city"
                className="form-control"
                id="searchCity"
                onChange={handleCityChange}
              />
            </div>
            <div className="col">
              <button
                type="submit"
                value="search"
                className="btn btn-outline-secondary"
                id="buttonGo"
              >
                Go!
              </button>
            </div>
          </div>
        </form>
        <span></span>
        <Today data={weatherData} />
        <TodayList data={weatherData} date={weatherData.date} />
        <hr className="listStart"></hr>
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
