import React from "react";
import { Todo } from "../../domain/Todo";
import TodoItem from "./TodoItem";
import useSWR from "swr";
import { TodoDto } from "../../infrastructure/TodoDto";

const TodoList = () => {
  const { data, error, isLoading } = useSWR(
    process.env.REACT_APP_API_URL + "/todos"
  );
  if (error) {
    return <div>failed to load...</div>;
  }
  if (isLoading) {
    return <div>Loding...</div>;
  }
  const todos = data!.data as TodoDto[];
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
