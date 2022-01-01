import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    event.preventDefault();
  }

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
    </div>
  );
}
