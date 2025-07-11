import React, { useState } from "react";
import TodoListForm from "./TodoListForm";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = [...todos, task];
    setTodos(newTodo);
    setTask("");
  };

  const handleDelete = (indexVal) => {
    const newTodos = todos.filter((todo,index)=> index != indexVal)
                setTodos(newTodos)
    
  }

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="enter Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />{" "}
              &nbsp;
              <button type="submit">Add Submit</button>
            </form>
            <TodoListForm todos={todos} handleDelete = {handleDelete}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default TodoList;
