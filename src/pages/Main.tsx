import { useEffect, useState } from "react";
import "./Main.css";
import Header from "../components/common/Header";
import InputTodo from "../components/todo/InputTodo";
import TodoList from "../components/todo/TodoList";
import { Todo } from "../domain/Todo";
import useTodo from "../application/useTodo";

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);
  const { onLoadTodos } = useTodo();

  useEffect(() => {
    (async () => {
      await onLoadTodos(setTodoListData);
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
