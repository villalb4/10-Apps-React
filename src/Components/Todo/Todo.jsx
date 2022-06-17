import React , {useState} from "react";
import Items from "./Items";
import "./Todo.css"

function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    setTitle(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id : crypto.randomUUID(),
      title: title,
      completed: false,
    };
 
    setTodos([...todos, newTodo])

    setTitle("")
  }

  function handleUpdate(id, value) {
    const temp = [...todos]
    const item = temp.find(i => i.id === id);
    item.title = value;
    setTodos(temp)
  }

  function handleDelete(id) {
    const temp = todos.filter(i => i.id !== id)
    setTodos(temp)
  }

  return (
    <div className="Todo">
      <form className="Todo_form" onSubmit={handleSubmit}>
        <input
          className="input_todo"
          type="text" 
          onChange={handleChange}
          value={title}
        />
        <input
          className="create_todo"
          type="submit" 
          value="Create todo"
          onClick={handleSubmit}
        />
      </form>

      <div className="Items_container">
        {todos.map((e,i) => (
          <Items key={i} item={e} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ))}
      </div>

    </div>
  )
}

export default Todo;