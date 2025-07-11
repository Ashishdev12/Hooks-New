import React from "react";

function TodoListForm({ todos, handleDelete }) {
  return (
    <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h5>
              {todo} &nbsp;
              <button onClick={() => handleDelete(index)}>Delete</button>
            </h5>
          </div>
        ))}
    </div>
  );
}

export default TodoListForm;
