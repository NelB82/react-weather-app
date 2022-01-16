import React from "react";

export default function weatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src="https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png"
        alt="img"
        width="80px"
        id="icon"
      />
      <br />
      <span className="WeatherForecast-temperatures-max">{max()}</span>|
      <span className="WeatherForecast-temperatures-min">{min()}°</span>
    </div>
  );
}
