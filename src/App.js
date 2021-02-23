import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

import { CurrentHighLow } from "./components/current-high-low/CurrentHighLow";
import { CurrentItems } from "./components/current-items/CurrentItems";
import { PrecipitationWind } from "./components/precipitation-wind/PrecipitationWind";
import { WindHumidity } from "./components/wind-humidity/WindHumidity";
import { DataContainer } from "./components/data-container/DataContainer";
import { BottomPage } from "./components/bottom-page/BottomPage";

export default function App() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState("Amsterdam");
  const [wind, setWind] = useState("null");
  const [precipitation, setPrecipitation] = useState("null");
  const [sky, setSky] = useState("null");
  const [feelslike, setFeelsLike] = useState("null");
  const [highTemp, setHighTemp] = useState("null");
  const [lowTemp, setLowTemp] = useState("null");
  

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setCity(response.data.name);
    setWind(response.data.wind.speed);
    setPrecipitation(response.data.main.humidity);
    setSky(response.data.weather.[0].main);
    setFeelsLike(response.data.main.feels_like);
    setHighTemp(response.data.main.temp_max)
    setLowTemp(response.data.main.temp_min);
    
    setReady(true);
    console.log(response.data);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <DataContainer />
          <div className="data-container">
            <h1 id="city"> {city} </h1>
            <div className="degrees-currentdaytogether">
              <h2 className="light-blue italic"> </h2>
              <CurrentItems temp={temperature} />
            </div>
            <ul className="wind-humidity">
              <div className="bold italic">
                <WindHumidity skycondition={sky} feelslike={feelslike} />
                <CurrentHighLow hightemp={highTemp} lowtemp={lowTemp} />
                <PrecipitationWind rain={precipitation} wind={wind} />
              </div>
            </ul>
          </div>
        </div>
        <div>
          <BottomPage />
        </div>
      </div>
    );
  } else {
    const apiKey = "d09585e76f8833f9d740d8b7cf3fe689";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
