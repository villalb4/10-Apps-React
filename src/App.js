import React from "react";
import Todo from "./Components/Todo/Todo";
import Weather from "./Components/Weather/Weather";
import Emoji from "./Components/Emojis/Emoji";
import "./App.css"

function App() {
  return (
    <div>
      <Todo />
      <Weather />
      <Emoji />
    </div>
  )
}

export default App;