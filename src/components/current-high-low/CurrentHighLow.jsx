import React from "react";

export const CurrentHighLow = (props) => (
  <li>
    <div className="current-high-low" id="current-high-low">
      <i className="fas fa-long-arrow-alt-up"></i>
      <i className="fas fa-long-arrow-alt-down"></i>
      <span className="h-hightemp italic bold" id="h-hightemp">
        {" "}
        H:{" "}
      </span>
      <span className="italic bold light-blue" id="current-high">
        {Math.round(props.hightemp)}°C
      </span>
      <span className="l-low-temp italic bold" id="l-low-temp">
        L:{" "}
      </span>
      <span className="italic bold light-blue" id="current-low">
        {Math.round(props.lowtemp)}°C
      </span>
    </div>
  </li>
);
