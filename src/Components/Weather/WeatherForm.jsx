import React, {useState} from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  )
}

export default WeatherForm;