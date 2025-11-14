import { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleComplete = (index) => {
    const updateTodo = todo.map((item, i) => {
      return i === index ? { ...item, completed: !item.completed } : item;
    });
    setTodo(updateTodo);
  };

  const deleteTask = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);
  };

  return (
    <div className="container todo">
      <h1 className="text-center">ToDo List</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="btn btn-success" type="button" onClick={addTask}>
          Add ToDo
        </button>
      </div>
      <div>
        <ul className="list-group list-group-flush list-group-numbered task_item">
          {todo.map((todo, index) => (
            <li className="list-group-item" key={index}>
              {/* {todo.completed ? "completed" : ""}
              {""} */}
              <span
                onClick={() => {
                  toggleComplete(index);
                }}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {todo.text}
              </span>
              {
                <button
                  className="btn btn-danger btn-sm delete_btn ms-5"
                  onClick={() => {
                    deleteTask(index);
                  }}
                >
                  Delete
                </button>
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
