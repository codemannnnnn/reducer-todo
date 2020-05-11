import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { initialState, reducer } from "./reducers/reducer";

export default function App() {
  // const [todoList, setTodoList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} handleSubmit={handleSubmit} />
    </div>
  );
}
