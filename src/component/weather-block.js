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
      localtime,
      lat,
      lon,
      tz_id: tzid
    } = location;
    const {
      temp_c: tempC,
      temp_f: tempF,
      condition: conditionCurrent,
      feelslike_c: feelslikeC,
      feelslike_f: feelslikeF,
      wind_mph: windKph,
      humidity
    } = current;

    loadScreen = (
      <div className = "weather-block__weather-data">
        <p> {name} </p>
        <p> {country} </p>
        <p> {time} </p>
        <p> {tempC} </p>
        <p> {feelslikeC} </p>
        <p> {windKph} </p>
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
