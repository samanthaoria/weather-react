import React, { useState } from "react";

export const WeatherUnit = (props) => {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature-value" id="temperature-value">
          {Math.round(props.temperature)}
        </span>
        <span className="units">
          <a href="/" id="link-celsius" className="active">
            {" "}
            °C{" "}
          </a>{" "}
          |
          <span className="fahrenheit">
            {" "}
            <a href="/" onClick={convertToFahrenheit} id="link-fahrenheit">
              °F{" "}
            </a>{" "}
          </span>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.temperature * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature-value" id="temperature-value">
          {Math.round(fahrenheit)}
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius} id="link-celsius">
            {" "}
            °C{" "}
          </a>{" "}
          |
          <span className="fahrenheit">
            {" "}
            <a href="/" id="link-fahrenheit">
              °F{" "}
            </a>{" "}
          </span>
        </span>
      </span>
    );
  }
};
