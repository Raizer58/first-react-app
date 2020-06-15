import React, { useState } from "react";

async function getweather (city) {
  const urlWeather = `https://api.weatherapi.com/v1/forecast.json?key=dacf6f28f2f14ec984921736202805&q=${city}&days=3`;
  const requestWeather = await fetch(urlWeather);
  const jsonWeather = await requestWeather.json();
  return jsonWeather
}

export default getweather;
