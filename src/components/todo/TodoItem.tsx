import { FaSpinner, FaTrash } from "react-icons/fa";
import { MouseEvent, useCallback, useState } from "react";
import "./TodoItem.css";
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

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target as HTMLElement).closest('.item-option')) alert(title);
  };

  return (
    <li className="item" onClick={clickHandler}>
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
