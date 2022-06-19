import React, {useState} from "react";

function WeatherForm({onChangeCity}) {

  const [city, setCity] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onChangeCity(city)
  }

  function handleChange(e) {
    let value = e.target.value;
    if(value !== ""){
      setCity(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  )
}

export default WeatherForm;