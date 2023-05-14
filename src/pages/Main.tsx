import { useEffect, useState } from "react";

import Header from "../components/Header";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { getTodoList } from "../api/todo";
import { TodoFetchItemType } from "../types/todo";

const Main = () => {
  const [todoListData, setTodoListData] = useState<TodoFetchItemType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
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
