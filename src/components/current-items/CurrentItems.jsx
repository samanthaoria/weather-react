import React from "react";

export const CurrentItems = (props) => (

  <div className="current-temperature" id="current-temperature">
    <div className="currentdate"> {props.date} </div>
    <p>
      <img src={props.image}/>
      <span className="temperature-value" id="temperature-value">
        
        {Math.round(props.temp)}
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
