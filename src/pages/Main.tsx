import React, { useEffect, useState } from "react";
import useTodo from "../application/useTodo";

import Header from "../components/Header";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { Todo } from "../domain/Todo";

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);
  const { getTodos } = useTodo();

  useEffect(() => {
    (async () => {
      const data = await getTodos();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
