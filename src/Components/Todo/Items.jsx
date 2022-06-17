import React from "react";
import { useState } from "react";

function Items({item , onUpdate}) {

  const [edit, setEdit] = useState(false)

  // ----COMPONENT----
  function ItemEdit() {

    const [value, setValue] = useState(item.title)

    function handleSubmit(e) {
      e.preventDefault()
    }

    function handleChange(e) {
      setValue(e.target.value)
    }

    function handleClick() {
      onUpdate(item.id, value);
      setEdit(false)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={value}/>
        <button onClick={handleClick}>Update</button>
      </form>
    )
  }

  // ----COMPONENT----
  function Element() {

    function handleClick(e){
      setEdit(true)
    }

    return (
      <div>
        {item.title}
        <button onClick={handleClick}>Edit</button>
        <button>Delete</button>
      </div>
    )
  }

  return (
    <div>{edit ? <ItemEdit /> : <Element />}</div>
  )
}

export default Items