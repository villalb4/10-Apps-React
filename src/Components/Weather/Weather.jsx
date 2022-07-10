import React, { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WatherMainInfo from './WeatherMainInfo';
import axios from "axios";
import "./Weather.css"

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo("Buenos aires")
  }, [])

  // useEffect(() => {
  //   document.title = `Wather | ${weather?.location.name}`
  // }, [weather])

  async function loadInfo(city){
    try {
      // const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=27bc4232fd34492d89d51117221806&q=${city}`)

      const request = (await axios(`https://api.weatherapi.com/v1/current.json?key=27bc4232fd34492d89d51117221806&q=${city}`)).data
      
      // const json = await request.json()
      // console.log(json)

      setWeather(request)

    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city){
    setWeather(null)
    loadInfo(city);
  }

  return (
    <div className="Weather">
      <WeatherForm onChangeCity={handleChangeCity} />
      <WatherMainInfo weather={weather} />
    </div>
  )
}

export default Weather;