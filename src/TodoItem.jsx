import React from "react";

export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span
          style={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "gray" : "black",
          }}
        >
          {title}
        </span>
      </label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}
