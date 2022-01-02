import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <span id="today-temperature">
        {Math.round(props.celsius)}
        <button id="celsius">°C</button>|
        <button href="/" id="fahrenheit" onClick={showFahrenheit}>
          °F
        </button>
      </span>
    );
  } else {
    return (
      <span id="today-temperature">
        {Math.round(fahrenheit())}
        <button href="/" id="celsius" onClick={showCelsius}>
          °C
        </button>
        |<button id="fahrenheit">°F</button>
      </span>
    );
  }
}
