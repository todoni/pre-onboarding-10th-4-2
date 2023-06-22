import TodoRepository from "../infrastructure/TodoRepository";
import { Todo } from "../domain/Todo";
import React, { SetStateAction } from "react";
import { mutate } from "swr";

const useTodo = () => {
  const repo = TodoRepository;

  const createTodo = async (title: string): Promise<void> => {
    try {
      const data = await repo.createTodo(title);
      mutate(process.env.REACT_APP_API_URL + "/todos");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (
    id: string,
    setIsLoading: React.Dispatch<SetStateAction<boolean>>,
    mounted: React.MutableRefObject<boolean>
  ): Promise<void> => {
    try {
      setIsLoading(true);
      await repo.deleteTodo(id);
      if (mounted.current) {
        mutate(process.env.REACT_APP_API_URL + "/todos");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      if (mounted.current) {
        setIsLoading(false);
        mutate(process.env.REACT_APP_API_URL + "/todos");
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
