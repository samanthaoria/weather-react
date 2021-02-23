import React from "react";

export const PrecipitationWind = (props) => (
  <>
    <li>
      <div className="precipitation">
        <i className="fas fa-cloud-rain"></i>
        Precipitation:
        <span className="italic bold light-blue" id="precipitation-probality">
          {" "}
          {props.rain} %
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
