import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <form id="searchForm" className="mb-3">
        <div className="row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Search for your city"
              className="form-control"
              id="search-city"
            />
          </div>
          <div className="col-4">
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
