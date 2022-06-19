import React, { useState } from "react";
import WeatherForm from "./WeatherForm";
import "./Weather.css"

function Weather() {
  const [weather, setWeather] = useState(null)

  async function loadInfo(city = "london") {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      )
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className="Weather">
      <WeatherForm onChangeCity={handleChangeCity} />
      <div></div>
    </div>
  )
}

export default Weather;