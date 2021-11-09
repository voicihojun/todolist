import "./App.css";
import React from "react";
import Clock from "./Clock/Clock";
import Login from "./Login/Login";
import TodoList from "./TodoList/TodoList";
import Quote from "./Quote/Quote";
import Weather from "./Weather/Weather";

function App() {
  return (
    <div className="App">
      <div id="todo-container">
        aa
        <Clock />
        <Login />
        <TodoList />
        <Weather />
        <Quote />
      </div>
    </div>
  );
}

export default App;
