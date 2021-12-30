import React, { useState } from "react";
import "./TodayList.css";
import axios from "axios";

export default function TodayList() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="TodayList">
        <div className="container" id="todayList">
          <div className="row">
            <div className="col-2">
              <ul>
                <li>temperature</li>
                <li>humidity</li>
                <li>wind</li>
                <li>condition</li>
              </ul>
            </div>

            <div className="col-2 ">
              <div className="vertical"></div>
              <ul>
                <li>
                  <span id="today-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <button href="#" id="celsius">
                    °C
                  </button>
                  |
                  <button href="#" id="fahrenheit">
                    °F
                  </button>
                </li>
                <li>
                  <span id="todayHumidity">{weatherData.humidity}</span>
                  <span>%</span>
                </li>
                <li>
                  <span id="todayWind">{Math.round(weatherData.wind)}</span>
                  <span>km/h</span>
                </li>
                <li>
                  <span id="todayCondition">{weatherData.condition}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "469afd3987955a7eaf265f8d616d9447";
    let city = "Bremen";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
