import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import WeatherBlock from "./component/weather-block";
import SearchBlock from "./component/search-block";
import getWeather from "./component/get-weather";

function Weather () {
  const [firstLoad, setFirstLoad] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const [time, setTime] =  useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  });

  if (!firstLoad) {
    async function getFisrLocation () {
      const urlLocation = "https://ipinfo.io/json?token=b8b5880ab30098";
      const requestLocation = await fetch(urlLocation);
      const jsonLocation = await requestLocation.json();
      setFirstLoad(true);
      setWeatherData(false);
      const { city } = jsonLocation;
      const weather = await getWeather(city);
      setWeatherData(weather);
    }
    getFisrLocation ();
  }

  async function submitHandler (city) {
      setWeatherData(false);
      const weather = await getWeather(city);
      setWeatherData(weather);
  }

  return (
    <div>
      <SearchBlock submit={ submitHandler}/>
      <WeatherBlock weatherData = { weatherData } time = { time }/>
    </div>
  );
}

ReactDOM.render(<Weather />, document.querySelector("main"));
