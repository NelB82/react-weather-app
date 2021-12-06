import React from "react";
import "./TodayList.css";

export default function TodayList() {
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
                <span id="today-temperature">18</span>
                <button href="#" id="celsius">
                  °C
                </button>
                |
                <button href="#" id="fahrenheit">
                  °F
                </button>
              </li>
              <li>
                <span id="todayHumidity">20</span>
                <span>%</span>
              </li>
              <li>
                <span id="todayWind">5</span>
                <span>km/h</span>
              </li>
              <li>
                <span id="todayCondition"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
