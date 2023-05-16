import { FaSpinner, FaTrash } from "react-icons/fa";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Todo } from "../domain/Todo";
import useTodo from "../application/useTodo";

interface TodoItemProps {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteTodo } = useTodo();
  const mounted = useRef(true);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      if (mounted.current) {
        setTodos((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      if (mounted.current) {
        setIsLoading(false);
      }
    }
  }, [id, setTodos, deleteTodo]);

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={handleRemoveTodo}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
