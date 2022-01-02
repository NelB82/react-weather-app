import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./Form";

document.body.style.backgroundColor = "#a6bdbd";

export default function App(props) {
  return (
    <div className="App">
      <div className="body">
        <div className="appWrapper">
          <div container className="app">
            <Form defaultCity="Bremen" />
          </div>
        </div>

        <div className="sourceCode">
          <a
            href="https://github.com/NelB82/react-weather-app"
            className="codeLink"
            target="_blank"
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
