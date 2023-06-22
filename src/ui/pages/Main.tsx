import React, { useEffect, useState } from "react";
import useTodo from "../../application/useTodo";

import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Todo } from "../../domain/Todo";

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { getTodos } = useTodo();

  useEffect(() => {
    (async () => {
      if (isLoaded === false) {
        await getTodos(setTodoListData, setIsLoaded);
      }
    })();
  }, [getTodos, isLoaded]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoInput setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
