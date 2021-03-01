import React from "react";
import "./CurrentButton.css";
import axios from "axios";

export const CurrentButton = (props) => {
  function onClick() {
    const apiKey = "a1244480e7949adfd659149b4a160e1f";
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`;
    // let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`;
    axios.get(urlApi).then(props.onWeather);
    const forecastUrlApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrlApi).then(props.onForecast);
  } 


  return (
    <button
      onClick={onClick}
      className="btn btn-primary current-button"
      id="btn-current"
    >
      📍Current
    </button>
  );
};
