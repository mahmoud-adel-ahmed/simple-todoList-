import React from "react";

const Todo = ({ item, todos, completed, setTodos, id }) => {
  let handleDelete = (id) => {
    let deletedItems = todos.filter((todo) => todo.id !== id);
    setTodos(deletedItems);
  };

  let completedTodos = (id) => {
    let completeTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }
      return todo;
    });

    setTodos(completeTodos);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{item}</li>
      <button className="complete-btn" onClick={() => completedTodos(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(id)}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
