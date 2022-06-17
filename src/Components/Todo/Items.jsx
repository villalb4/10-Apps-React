import React from "react";
import { useState } from "react";

function Items({item , onUpdate, onDelete}) {

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

    function handleClick(){
      setEdit(true)
    }

    function handleDelete(){
      onDelete(item.id)
    }

    return (
      <div className="Component_item">
        {item.title}
        <div className="item_button">
          <button className="edit_button" onClick={handleClick}>Edit</button>
          <button className="delete_button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div className="Items">{edit ? <ItemEdit /> : <Element />}</div>
  )
}

export default Items