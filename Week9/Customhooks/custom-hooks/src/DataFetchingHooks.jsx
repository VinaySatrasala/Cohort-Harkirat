import { Component, useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function useTodos(n) {
  // Can also use swr library for this
  const [todos, setTodos] = useState([]);
  // Need to render loading while fetching is happening so declar a variable loading a state one
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const val = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n);

    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(val);
    };
  }, [n]);

  return { todos, loading };
}
function App() {
  const { todos, loading } = useTodos(1000);
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
}

function Todo({ todo }) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
