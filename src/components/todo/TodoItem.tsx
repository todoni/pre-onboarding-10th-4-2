import { FaSpinner, FaTrash } from "react-icons/fa";
import { useCallback, useState } from "react";

import { deleteTodo } from "../../api/todo";
import { TodoItemProps } from "../../types/todo";

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setIsLoading(false);
      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert("Something went wrong.");
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
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
