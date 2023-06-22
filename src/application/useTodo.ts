import TodoRepository from "../infrastructure/TodoRepository";
import { Todo } from "../domain/Todo";
import React, { SetStateAction } from "react";

const useTodo = () => {
  const repo = TodoRepository;

  const createTodo = async (
    title: string,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ): Promise<void> => {
    try {
      const data = await repo.createTodo(title);
      setTodos((prev) => [...prev, { id: data.id, title: data.title }]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (
    id: string,
    setTodos: React.Dispatch<SetStateAction<Todo[]>>,
    setIsLoading: React.Dispatch<SetStateAction<boolean>>,
    mounted: React.MutableRefObject<boolean>
  ): Promise<void> => {
    try {
      setIsLoading(true);
      await repo.deleteTodo(id);
      if (mounted.current) {
        setTodos((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      if (mounted.current) {
        setIsLoading(false);
      }
    }
  };

  const getTodoSearch = async (query: string, page: number): Promise<void> => {
    try {
      //const data = await repo.getTodoSearch(query, page);
      //보여지는 search list update
    } catch (error) {
      console.log(error);
    }
  };
  return { createTodo, deleteTodo, getTodoSearch };
};

export default useTodo;
