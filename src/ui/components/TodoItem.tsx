import { FaSpinner, FaTrash } from "react-icons/fa";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { Todo } from "../../domain/Todo";
import useTodo from "../../application/useTodo";

interface TodoItemProps {
  id: string;
  title: string;
}

const TodoItem = ({ id, title }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const mounted = useRef(true);

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
          <button>
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
