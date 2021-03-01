import React from "react";
import { WeatherIcon } from "../weather-icon/WeatherIcon";
import "./ForecastPreview.css";

export const ForecastPreview = (props) => {
  function hours() {
    const date = new Date(props.data.dt * 1000)
    const hours = date.getHours()
    return `${hours}:00`;

  }
  
  function temperature() {
    const temperature = Math.round(props.data.main.temp);
      return `${temperature}°C`;
  }
  
  return (
    <div className="ForecastPreview col">
      <div className="forecast-preview-time">{hours()} </div>
      <span className="forecast-icon">
        <WeatherIcon image={props.data.weather[0].icon} />
      </span>
      <div className="forecast-preview-temp">{temperature()} </div>
      
    </div>
  );

}