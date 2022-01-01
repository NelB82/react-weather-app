import React from "react";
import TodayList from "./TodayList";
import Today from "./Today";

export default function WeatherInfo() {
  return (
    <div className="Info">
      <span></span>
      <Today defaultCity="Bremen" />
      <TodayList defaultCity="Bremen" />
      <hr className="listStart"></hr>

      <div className="weatherForecast" id="forecast"></div>
    </div>
  );
}
