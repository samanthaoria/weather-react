import React from "react";

export const CurrentItems = () => (
  <div className="current-temperature" id="current-temperature">
    <p>
      <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
      <span className="temperature-value" id="temperature-value">
        {" 30 "}
      </span>
      <span className="units">
        <a href="/" id="link-celsius" className="active">
          {" "}
          °C{" "}
        </a>{" "}
        |
        <a href="/" id="link-fahrenheit">
          °F{" "}
        </a>
      </span>
    </p>
  </div>
);
