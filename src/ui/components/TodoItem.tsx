import { FaSpinner, FaTrash } from "react-icons/fa";
import React, { useCallback, useState, useEffect, useRef } from "react";
import useTodo from "../../application/useTodo";

interface TodoItemProps {
  id: string;
  title: string;
}

const TodoItem = ({ id, title }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deleteTodo } = useTodo();
  const mounted = useRef(true);

  const handleRemoveTodo = useCallback(async () => {
    await deleteTodo(id, setIsLoading, mounted);
  }, []);

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
