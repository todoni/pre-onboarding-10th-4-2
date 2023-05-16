import TodoRepository from "../infrastructure/TodoRepository";
import { Todo } from "../domain/Todo";

const useTodo = () => {
  const repo = TodoRepository;

  const getTodos = async (): Promise<Todo[]> => {
    try {
      const data = await repo.getTodoList();
      return data.map((item) => {
        return { id: item.id, title: item.title };
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const createTodo = async (title: string): Promise<Todo> => {
    try {
      const data = await repo.createTodo(title);
      return { id: data.id, title: data.title };
    } catch (error) {
      console.log(error);
      return { id: "", title: "" };
    }
  };

  const deleteTodo = async (id: string): Promise<void> => {
    try {
      await repo.deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
  };
  return { getTodos, createTodo, deleteTodo };
};

export default useTodo;
