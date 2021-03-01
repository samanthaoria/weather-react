import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { WeatherUnit } from "../celsius-fahrenheit/CelsiusFahrenheit";
import "./CurrentItems.css";



export const CurrentItems = (props) => (
  <div className="current-temperature" id="current-temperature">
    <div className="currentdate"> {props.date} </div>

   

    <WeatherUnit
      temperature={props.temperature}
      celsius={props.celsius}
      fahrenheit={props.fahrenheit}
    />
  </div>
);
