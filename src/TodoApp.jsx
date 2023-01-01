import React, { useState } from 'react';
import {
  useGetTodoQuery,
  useGetTodosQuery,
  useGetUsersQuery,
} from "./store/apis";

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoadingOne } = useGetTodoQuery(todoId);
  const { data: users, isLoadingUsers } = useGetUsersQuery();

  console.log({ users });

  function nextTodo() {
    setTodoId(todoId + 1);
  }

  function prevTodo() {
    if(todoId === 1) return;
    setTodoId(todoId - 1);
  }

  return (
    <div className="divTodoApp">
      <h1>Todo - RTK Query</h1>
      <div>
        <h4>{isLoading ? "Loading..." : ""} </h4>
        <pre>{JSON.stringify(todo)}</pre>
      </div>
      <br />
      <br />
      <button onClick={prevTodo}>Prev todo <small>(untill 1)</small></button>{" "}
      <button onClick={nextTodo}>Next todo</button>
      {/*  */}
      <ul className="ulTodoApp">
        {todos.slice(0, 20).map(({ title, id, completed }) => (
          <li key={id}>
            <strong>
              <u>{completed ? "DONE" : "Pending"}</u>
            </strong>
            {" - "}
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
