import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Form";

export default function App(props) {
  document.body.style.backgroundColor = "#a6bdbd";
  return (
    <div className="App">
      <div className="body">
        <div className="appWrapper">
          <div className="app">
            <Form defaultCity="Bremen" />
          </div>
        </div>

        <div className="sourceCode">
          <a
            href="https://github.com/NelB82/react-weather-app"
            className="codeLink m-2"
            target="/"
          >
            open source code
          </a>
          by Nele Braun
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
