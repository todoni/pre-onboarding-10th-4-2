import { FormEvent, MouseEvent, useCallback } from "react";
import todoRepository from "../infrastructure/TodoRepository";
import { UsePostArgs } from "../types/hook";
import { blurInput } from "../utils";

const usePost = ({
  setIsLoading,
  setInputText,
  setIsTyping,
  setTodos,
  inputText,
  ref,
  formRef,
}: UsePostArgs) => {
  const repo = todoRepository;
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) return alert("Please write something");

        const newTitle = trimmed;
        const data = await repo.createTodo(newTitle);

        setTodos(prev => [...prev, { id: data.id, title: data.title }]);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setInputText("");
        setIsTyping(false);
        setIsLoading(false);
      }
    },
    [inputText, setTodos]
  );

  const handleItemClick = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      try {
        setIsLoading(true);

        const suggestion = (e.target as HTMLElement).textContent!;

        const newTitle = suggestion;
        const data = await repo.createTodo(newTitle);
        setTodos(prev => [...prev, { id: data.id, title: data.title }]);
      } catch (error) {
        console.error(error);
        alert("Something went wrong.");
      } finally {
        setInputText("");
        setIsLoading(false);
        setIsTyping(false);
        blurInput(ref, formRef);
      }
    },
    [setTodos]
  );

  return {
    handleSubmit,
    handleItemClick,
  };
};

export default usePost;
