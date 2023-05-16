import React from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { MouseEvent, SetStateAction, useCallback, useState } from "react";
import "./TodoItem.css";
import useTodo from "../../../application/useTodo";
import { Todo } from "../../../domain/Todo";

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<SetStateAction<Todo[]>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { onRemoveTodo } = useTodo();

  const handleRemoveTodo = useCallback(async () => {
    await onRemoveTodo(id, setTodos, setIsLoading);
  }, [id, setTodos]);

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target as HTMLElement).closest(".item-option")) alert(title);
  };

  return (
    <li className="item" onClick={clickHandler}>
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
