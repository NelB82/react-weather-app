import React from "react";
import "./TodayList.css";
import WeatherTemperature from "./WeatherTemperature";

export default function TodayList(props) {
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
                <WeatherTemperature celsius={props.data.temperature} />
              </li>
              <li>
                <span id="todayHumidity">{props.data.humidity}</span>
                <span>%</span>
              </li>
              <li>
                <span id="todayWind">{Math.round(props.data.wind)}</span>
                <span>km/h</span>
              </li>
              <li>
                <span className="text-capitalize" id="todayCondition">
                  {props.data.condition}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
