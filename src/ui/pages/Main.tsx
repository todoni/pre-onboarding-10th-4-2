import React, { useEffect, useState } from "react";
import useTodo from "../../application/useTodo";

import Header from "../components/Header";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { Todo } from "../../domain/Todo";

const Main = () => {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Main;
