import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Forecast.css";
import { WeatherIcon } from "../weather-icon/WeatherIcon";
import { ForecastPreview } from "../forecast-preview/ForecastPreview";

export const Forecast = (props) => {
  const [forecast, setForecast] = useState();

  function handleForecastResponse(response) {
    setForecast(response.data);
  }

  useEffect(() => {
    const apiKey = "a1244480e7949adfd659149b4a160e1f";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  }, [props.city]);

  if (forecast) {
    return (
      <div className="forecast row">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    return null;
  }
};
