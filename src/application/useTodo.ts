import todoRepository from "../infrastructure/TodoRepository";
import React, { SetStateAction } from "react";
import { Todo } from "../domain/Todo";

const useTodo = () => {
  const repo = todoRepository;

  const onRemoveTodo = async (
    id: string,
    setTodos: React.Dispatch<SetStateAction<Todo[]>>,
    setIsLoading: React.Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      setIsLoading(true);
      await repo.deleteTodo(id);
      setIsLoading(false);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("Something went wrong.");
    }
  };

  return { onRemoveTodo };
};

export default useTodo;
