import React from "react";

export const Form = ({ inputVal, setInputVal, todos, setTodos, setStatus }) => {
  let handleInputVal = (e) => {
    setInputVal(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.input.value) {
      setTodos([
        ...todos,
        { item: inputVal, completed: false, id: Math.random() * 30 },
      ]);
      setInputVal("");
    }
  };

  let handleSelectStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        placeholder="add_todo"
        name="input"
        value={inputVal}
        onChange={handleInputVal}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          onChange={handleSelectStatus}
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
