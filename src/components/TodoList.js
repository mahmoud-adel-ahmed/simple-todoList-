import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterSelect }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterSelect.map((todo) => {
          return (
            <Todo {...todo} key={todo.id} todos={todos} setTodos={setTodos} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
