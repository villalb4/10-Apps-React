import React, {useState} from "react";
import './WeatherForm.css';

function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState('');

  function handleChange(e){
    const value = e.target.value;
    if(value) {
      setCity(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city)
  }

  return (
    <div className="weatherForm">
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" onChange={handleChange} placeholder="Location"/>
      </form>
    </div>
  )
}

export default WeatherForm;