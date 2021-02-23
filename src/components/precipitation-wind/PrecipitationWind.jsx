import React from "react";

export const PrecipitationWind = (props) => (
  <>
    <li>
      <div className="humidity">
        <i className="fas fa-cloud-rain"></i>
        Humidity:
        <span className="italic bold light-blue" id="precipitation-probality">
          {" "}
          {props.humidity} %
        </span>
      </div>
    </li>
    <li>
      <div className="wind-adjust">
        <i className="fas fa-wind"></i> Wind: {" "}
        <span className="italic bold light-blue">
          <span id="wind-wind"> 
          {Math.round(props.wind)} 
          </span> km/h
        </span>
      </div>
    </li>
  </>
);
