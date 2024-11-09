
`This component is used for rendering array passed as input
that contain all the TODOS`;
export function Todos(props) {
  console.log(props);
  return (
    <div>
      {props.todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Done" : "Mark as Done"}</button>
          </div>
        );
      })}
    </div>
  );
}
