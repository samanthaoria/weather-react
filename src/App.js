import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FormattedDate from "./components/formatted-date/FormattedDate";

import { CurrentHighLow } from "./components/current-high-low/CurrentHighLow";
import { CurrentItems } from "./components/current-items/CurrentItems";
import { PrecipitationWind } from "./components/precipitation-wind/PrecipitationWind";
import { WindHumidity } from "./components/wind-humidity/WindHumidity";
import { FormContainer } from "./components/form-container/FormContainer";
import { BottomPage } from "./components/bottom-page/BottomPage";



export default function App(props) {
  // const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState("Amsterdam");
  const [wind, setWind] = useState("null");
  const [humidity, setHumidity] = useState("null");
  const [sky, setSky] = useState("null");
  const [feelslike, setFeelsLike] = useState(0);
  const [highTemp, setHighTemp] = useState(0);
  const [lowTemp, setLowTemp] = useState(0);
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setCity(response.data.name);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setSky(response.data.weather[0].main);
    setFeelsLike(response.data.main.feels_like);
    setHighTemp(response.data.main.temp_max);
    setLowTemp(response.data.main.temp_min);
    setImage(response.data.weather[0].icon);
    setCelsius(response.data.main.temp);
    setFahrenheit((response.data.main.temp) * 9 / 5 + 32);
    setDate(new Date());


    // setReady(true);
    console.log(response.data);
  }

  function search(city) {
    const apiKey = "d09585e76f8833f9d740d8b7cf3fe689";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    search(city);
  }, [city]);

  useEffect(() => {
    search(city);
  }, []);

  if (date) {
    return (
      <div className="App">
        <div className="container">
          <FormContainer onCityChange={setCity} />
          <div className="form-container">
            <h1 id="city"> {city} </h1>
            <div className="degrees-currentdaytogether">
              <h2 className="light-blue italic">
                {" "}
                <FormattedDate date={date} />{" "}
              </h2>
              <CurrentItems image={image} temp={temperature} celsius={celsius} fahrenheit={fahrenheit} />
            </div>
            <ul className="wind-humidity">
              <div className="bold italic">
                <WindHumidity skycondition={sky} feelslike={feelslike} />
                <CurrentHighLow hightemp={highTemp} lowtemp={lowTemp} />
                <PrecipitationWind humidity={humidity} wind={wind} />
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
    return null;
  }
}