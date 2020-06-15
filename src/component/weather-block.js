import React, { useState } from "react";

function WeatherBlock (data) {
  const { weatherData, time } = data;
  let loadScreen = (
    <div className = "weather-block__load-screen"> 
      <p> load screen </p>
    </div>
  );

  if(weatherData !== false) {
    const { location, current, forecast } = weatherData;
    const {
      name,
      country,
    } = location;
    const {
      temp_c: tempC,
      feelslike_c: feelslikeC,
      wind_mph: windKph,
      humidity
    } = current;

    loadScreen = (
      <div className = "weather-block__weather-data">
        <p> {name} </p>
        <p> {country} </p>
        <p> {time} </p>
        <p> temp - {tempC} </p>
        <p> feelslike -{feelslikeC} </p>
        <p> wind - {windKph} </p>
        <p> humidity - {humidity} </p>
      </div>
    )
  }

  return (
    <div className = "main__weather-block">
      {loadScreen}
    </div>
  );
}

export default WeatherBlock;
