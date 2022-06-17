import React , {useState} from "react";
import Items from "./Items";

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
  }

  function handleUpdate(id, value) {
    const temp = [...todos]
    const item = temp.find(i => i.id === id);
    item.title = value;
    setTodos(temp)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          onChange={handleChange}
        />
        <input 
          type="submit" 
          value="Create todo"
          onClick={handleSubmit}
        />
      </form>

      <div>
        {todos.map((e,i) => (
          <Items key={i} item={e} onUpdate={handleUpdate} />
        ))}
      </div>

    </div>
  )
}

export default Todo;