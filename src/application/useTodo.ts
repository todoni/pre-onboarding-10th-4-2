import todoRepository from "../infrastructure/TodoRepository";
import React, { SetStateAction } from "react";
import { Todo } from "../domain/Todo";

const useTodo = () => {
  const repo = todoRepository;

  const onLoadTodos = async (setTodos: React.Dispatch<SetStateAction<Todo[]>>): Promise<void> => {
    try {
      const data = await repo.getTodoList();
      setTodos(
        data.map(item => {
          return { id: item.id, title: item.title };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

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

  return { onLoadTodos, onRemoveTodo };
};

export default useTodo;
