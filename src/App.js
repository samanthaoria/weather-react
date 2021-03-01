import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FormattedDate from "./components/formatted-date/FormattedDate";

import { CurrentHighLow } from "./components/current-high-low/CurrentHighLow";
import { CurrentItems } from "./components/current-items/CurrentItems";
import { PrecipitationWind } from "./components/precipitation-wind/PrecipitationWind";
import { WindHumidity } from "./components/wind-humidity/WindHumidity";
import { CityFormContainer } from "./components/city-form-container/CityFormContainer";
import { BottomPage } from "./components/bottom-page/BottomPage";
import { WeatherIcon } from "./components/weather-icon/WeatherIcon";
import { Forecast } from "./components/forecast/Forecast";

export default function App(props) {
  // const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("Amsterdam");
  const [wind, setWind] = useState("null");
  const [humidity, setHumidity] = useState("null");
  const [sky, setSky] = useState("null");
  const [feelslike, setFeelsLike] = useState(0);
  const [highTemp, setHighTemp] = useState(0);
  const [lowTemp, setLowTemp] = useState(0);
  const [image, setImage] = useState();
  const [date, setDate] = useState(0);
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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
    setFahrenheit((response.data.main.temp * 9) / 5 + 32);
    setDate(new Date());
  }

  function onWeather(weatherData) {
    // dados da API weather
    setTemperature(weatherData.data.main.temp);
    setCity(weatherData.data.name);
    setWind(weatherData.data.wind.speed);
    setHumidity(weatherData.data.main.humidity);
    setSky(weatherData.data.weather[0].main);
    setFeelsLike(weatherData.data.main.feels_like);
    setHighTemp(weatherData.data.main.temp_max);
    setLowTemp(weatherData.data.main.temp_min);
    setImage(weatherData.data.weather[0].icon);
    setCelsius(weatherData.data.main.temp);
    setFahrenheit((weatherData.data.main.temp * 9) / 5 + 32);
    setLatitude(weatherData.data.city.coord.lat);
    setLongitude(weatherData.data.city.coord.lon);
  }

  function onForecast(forecastData) {
    // dados da API forecast
    setTemperature(forecastData.data.main.temp);
    setCity(forecastData.data.name);
    setWind(forecastData.data.wind.speed);
    setHumidity(forecastData.data.main.humidity);
    setSky(forecastData.data.weather[0].main);
    setFeelsLike(forecastData.data.main.feels_like);
    setHighTemp(forecastData.data.main.temp_max);
    setLowTemp(forecastData.data.main.temp_min);
    setImage(forecastData.data.weather[0].icon);
    setCelsius(forecastData.data.main.temp);
    setFahrenheit((forecastData.data.main.temp * 9) / 5 + 32);
    setLatitude(forecastData.data.city.coord.lat);
    setLongitude(forecastData.data.city.coord.lon);
  }

  function search(city) {
    const apiKey = "a1244480e7949adfd659149b4a160e1f";
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
          <CityFormContainer onCityChange={setCity} city={city} latitude={latitude} longitude={longitude} />
          <div className="data-container">
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div className="city-data">
                <div>
                  <span id="city"> {city} </span>
                  <h2 className="light-blue italic">
                    <FormattedDate date={date} />
                  </h2>
                </div>
                <div className="degrees-currentdaytogether">
                  <div style={{ display: "flex" }}>
                    <WeatherIcon image={image} />
                  </div>
                  <CurrentItems
                    temperature={temperature}
                    celsius={celsius}
                    fahrenheit={fahrenheit}
                  />
                </div>
              </div>
              <div className="weather-data">
                <ul className="wind-humidity">
                  <div className="bold italic">
                    <WindHumidity skycondition={sky} feelslike={feelslike} />
                    <CurrentHighLow hightemp={highTemp} lowtemp={lowTemp} />
                    <PrecipitationWind humidity={humidity} wind={wind} />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="forecast-data">
            <Forecast city={city} />
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
