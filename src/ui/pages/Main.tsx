import React, { useEffect, useState } from "react";
import useTodo from "../../application/useTodo";

import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Todo } from "../../domain/Todo";

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoInput setTodos={setTodoListData} />
        <TodoList />
      </div>
    </div>
  );
};

export default Main;
