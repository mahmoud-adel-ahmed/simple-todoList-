import React, { useEffect, useState } from "react";
import { Form } from "./components/Form ";
import TodoList from "./components/TodoList";

const App = () => {
  let [inputVal, setInputVal] = useState("");
  let [todos, setTodos] = useState([
    { item: "html", completed: false, id: Math.random() },
    { item: "css", completed: true, id: Math.random() },
  ]);

  let [status, setStatus] = useState("all");
  let [filterSelect, setFilterSelect] = useState([]);

  useEffect(() => {
    let handleSelectUi = () => {
      switch (status) {
        case "completed":
          setFilterSelect(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterSelect(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterSelect(todos);
          break;
      }
    };
    handleSelectUi();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputVal={inputVal}
        setInputVal={setInputVal}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterSelect={filterSelect} />
    </div>
  );
};

export default App;
