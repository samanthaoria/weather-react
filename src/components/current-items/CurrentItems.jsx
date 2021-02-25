import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { WeatherUnit } from "../celsius-fahrenheit/CelsiusFahrenheit";

const codeMapping = {
  "01d": "CLEAR_DAY",
  "01N": "CLEAR_NIGHT",
  "02d": "PARTLY_CLOUDY_DAY",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "04d": "CLOUDY",
  "04n": "CLOUDY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "FOG",
  "50n": "FOG",
};

export const CurrentItems = (props) => (
  <div className="current-temperature" id="current-temperature">
    <div className="currentdate"> {props.date} </div>

  
      <span className="currentIcon">
        {" "}
        <ReactAnimatedWeather
          icon={codeMapping[props.image]}
          color="#3478d4"
          size={50}
          animate={true}
        />{" "}
      </span>

      <WeatherUnit />
    
  </div>
);
