import React from "react";
import { Counter } from './compenonts/Counter ';
import { ChangeColor } from './compenonts/Color';
import TodoApp from './compenonts/todo';
import { SignForm } from './compenonts/SignForm';
function App() {
  return <div className="App">
    <Counter />
    <ChangeColor />
    <TodoApp />
    <SignForm />
  </div>;
}

export default App;
