import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  return (
    <div>
      {todos.map(({title, description}) => <Todo title={title} description={description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h2>
      {title}
    </h2>
    <h5>
      {description}
    </h5>
  </div>
}

export default App